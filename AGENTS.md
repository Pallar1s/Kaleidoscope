# Kaleidoscope project context

## Purpose and scope

Kaleidoscope is a browser-only React SPA for real-time generative graphics. It combines an articulated-joint simulation, persistent 2D trails, and WebGL2 fragment shaders. The pointer can temporarily replace the final joint as the shader emitter.

These instructions apply to the whole repository. Keep this file current when architecture, commands, or important contracts change.

## Stack and prerequisites

- JavaScript ES modules; there is no TypeScript, backend, database, or environment-variable configuration.
- React 18 and React DOM 18.
- Vite 8 with `@vitejs/plugin-react`.
- WebGL2; multipass effects additionally need `EXT_color_buffer_float`.
- Node.js 22.12+ and npm. `package-lock.json` is the authoritative lockfile.
- Tests use the built-in `node:test` runner and Playwright Chromium.

Install and run:

```bash
npm ci
npm run dev
```

Useful commands:

```bash
npm test                 # unit/data tests
npx playwright install chromium
npm run test:browser     # WebGL browser tests; starts Vite automatically
npm run test:all         # unit then browser tests
npm run build            # production output in dist/
npm run preview
```

There is currently no lint or formatting script.

## Repository map

- `index.html`: Vite entry document and global full-screen defaults.
- `src/main.jsx`: mounts `<App />` under React Strict Mode.
- `src/App.jsx`: top-level UI state, animation loop, pointer handling, canvas layering, resize/context-loss lifecycle, and renderer orchestration.
- `src/SidePanel.jsx` and `src/SidePanel.module.css`: settings panel and its CSS module.
- `src/AppState.js`: preset loading/validation and articulated-joint simulation.
- `src/Matrix3x2.js`: small affine-transform utility used by the joint chain.
- `src/runtime/frameEmitters.js`: pure per-frame emitter selection, velocity, pointer-replacement, and joint-upload preparation.
- `src/renderer.js`: stable renderer facade re-exporting the public rendering API.
- `src/rendering/shaderCatalog.js`: shader discovery and channel-source metadata.
- `src/rendering/webglRenderer.js`: WebGL2 resources, shader compilation, single- and multipass rendering, and trail/emission texture uploads.
- `src/rendering/canvasRenderer.js`: Canvas2D trail and joint drawing.
- `src/rendering/renderSize.js`: framebuffer sizing and GPU/pixel-budget limits.
- `src/rendering/colors.js`: shared `#AARRGGBB` color parsing.
- `src/shaders/*.js`: shader definitions discovered eagerly with `import.meta.glob`.
- `presets/presets.json`: data-driven joint presets (34 at the time this context was written).
- `test/core.test.js`: matrix, preset-schema, and joint-coordinate tests.
- `test/browser/shaders.spec.js`: shader compilation/GPU-state, pause, render-budget, sampler, and context-recovery tests.
- `playwright.config.js`: Chromium/SwiftShader test setup and Vite web server.
- `.github/workflows/deploy.yml`: test, build, and GitHub Pages deployment from `dist/` on pushes to `main`.
- `docs/`: checked-in historical/generated site snapshot. The current workflow deploys `dist/`, not `docs/`; do not hand-edit generated bundles unless specifically requested.

## Runtime architecture

`App.jsx` stacks three full-screen canvases:

1. WebGL shader canvas (`z-index: 1`).
2. Persistent 2D trail canvas (`z-index: 2`).
3. Current joint visualization canvas (`z-index: 3`).

The settings/status UI sits above them. The app starts paused. React state drives visible controls, while matching refs expose current values to the long-lived `requestAnimationFrame` callback without recreating it.

On each active frame:

1. Clamp simulation delta to 0.05 seconds and advance app time/joint rotations.
2. Compute joint coordinates in framebuffer pixels.
3. Extend enabled trails from previous to current joint endpoints.
4. Choose the emitter: pressed pointer first, otherwise the last joint endpoint.
5. Pass position, velocity, time, delta, frame count, and interaction state to the active shader.
6. Draw the joint overlay if enabled.

Pause and document visibility freeze joint motion, shader time, frame counters, feedback buffers, and trail accumulation. A paused UI change may request one redraw, but must not advance temporal state. Switching presets/effects and resizing reset stale temporal data. WebGL context loss is shown as an accessible alert and restoration reinitializes resources.

Trail controls have separate responsibilities: Trail Overlay only controls the raw 2D canvas visibility, Trail Emission controls accumulation, and Clear Trail explicitly erases history. A hidden trail canvas must keep accumulating while emission is enabled and the active shader declares a `trail` channel source. Detect this through shader channel metadata (`shaderUsesChannelSource`), never through a hard-coded effect-name list.

Pointer coordinates are converted from CSS pixels to framebuffer pixels. Most emitter uniforms use the top-left-oriented canvas coordinates; `u_mouse` flips Y for GLSL/Shadertoy-style bottom-left coordinates. Pointer dragging uses interaction `z = 2`; the animated joint emitter has `z = 0`.

## Joint preset contract

`presets/presets.json` is an array of:

```json
{
  "Name": "Preset name",
  "Joints": [
    {
      "Size": 100,
      "Speed": 10000,
      "Enabled": true,
      "JointColor": "#FFFF0000"
    }
  ]
}
```

- `Name` must be a non-empty string.
- Each preset must contain at least one joint.
- `Size` must be finite and positive. Sizes are relative; the chain is normalized to half the smaller framebuffer dimension.
- `Speed` must be finite and is stored in historical hundredths of a degree per second (`10000` means `100 deg/s`). Negative values reverse rotation.
- `Enabled` controls trail emission for that joint, not whether the joint exists.
- `JointColor` is `#AARRGGBB`, not CSS `#RRGGBBAA`.
- Simulation values use seconds; rendering geometry uses framebuffer coordinates.

Keep schema validation and `test/core.test.js` aligned when changing this format.

## Shader contracts

Shader modules are discovered automatically and the filename becomes the effect name. `availableShaders` is sorted alphabetically.

### Single-pass shader

Export exactly one name ending in `FragmentShader`, normally:

```js
export const exampleFragmentShader = `...`
```

Optional exports:

```js
export const channelSources = { iChannel0: 'trail' }
export const trailMipmaps = true
```

Unspecified channels receive a generated repeatable noise texture. A source may be `trail`, `emission`, `noise`, or `self` (null for a single-pass shader). `trail` is persistent history, while `emission` contains only the current frame's enabled joint segments. `trailMipmaps` requests mipmap generation for the uploaded 2D trail texture.

### Multipass shader

Export two or more names ending in `FragmentShader`, conventionally `bufferAFragmentShader` through `bufferDFragmentShader` plus `imageFragmentShader`. Exported names are lowercased into pass IDs (`buffera`, ..., `image`). Optional module exports are:

```js
export const common = `...` // prepended to every pass
export const channels = {
  buffera: { iChannel0: 'self' },
  image: { iChannel0: 'buffera' }
}
export const samplers = {
  buffera: { iChannel0: { filter: 'linear', wrap: 'repeat' } }
}
export const passSizes = {
  buffera: { width: 201, height: 1 }
}
```

Channel sources can reference `self`, `noise`, `trail`, `emission`, or another buffer ID. `trail` is the persistent 2D history; `emission` is a transient texture containing only the current frame's enabled joint segments. Supported sampler filters are `nearest`/`linear`; wraps are `clamp`/`repeat`/`mirror`. Pass sizes are capped by the main framebuffer dimensions. Buffer passes use ping-pong RGBA16F/HALF_FLOAT FBOs and run in A-B-C-D order; `image` renders to the screen. Multipass effects are unavailable without `EXT_color_buffer_float`.

The renderer lazily compiles effects. It adapts legacy GLSL by adding WebGL2 boilerplate, replacing `gl_FragColor`, and replacing `texture2D(...)`, but it is not a general GLSL transpiler. Prefer WebGL2-compatible GLSL and high precision.

Recognized uniforms are:

- `u_time` (seconds), `u_timeDelta` (seconds), `u_frameRate`, `u_frame`, `u_sampleRate`.
- `u_resolution` in framebuffer pixels.
- `u_emitter`, `u_emitterX`, `u_emitterY`, `u_emitterVelX`, `u_emitterVelY`.
- `u_jointCount`, `u_joints[8]` (`xy` position and `zw` velocity in framebuffer coordinates), `u_jointColors[8]` (normalized RGBA), and `u_jointEmissionStrength` (UI-controlled color intensity). Pointer interaction replaces the final joint entry.
- Shadertoy-style `u_mouse`.
- `iChannel0` through `iChannel3`.

When adding or changing a shader, run the Playwright suite: it selects every discovered effect and catches compile, framebuffer, sampler, and WebGL errors. Preserve pause behavior for feedback effects.

## Rendering constraints and invariants

- The framebuffer is bounded by GPU `MAX_TEXTURE_SIZE`, `MAX_VIEWPORT_DIMS`, and a hard 2,073,600-pixel budget (1080p). The resolution UI reports the effective capped scale.
- Resize destroys size-dependent feedback resources and resets effect frame counters.
- Switching effects destroys the previous effect's temporal resources.
- Trail-to-texture uploads are dirty-tracked and should not be repeated unnecessarily within a render sequence.
- GPU programs, buffers, VAOs, FBOs, textures, and samplers must be cleaned up through the existing disposal paths.
- Shader compilation/runtime failure should remain isolated to the affected effect and surface through the existing `role="alert"` UI.
- Preserve accessible names used by browser tests: `Interactive pixel shader`, `Open settings`/`Close settings`, `Shader effect`, and `Play animation`/`Pause animation`.
- Preserve the separation between Trail Overlay, Trail Emission, and Clear Trail; hiding the overlay must not clear or stop a trail texture consumed by a shader.

## Testing expectations

For data/model-only changes, at minimum run `npm test`. For UI, renderer, shader, resize, input, pause, or WebGL lifecycle changes, run:

```bash
npm test
npm run test:browser
npm run build
```

Playwright requires its matching browser binary; install it with `npx playwright install chromium` (CI uses `--with-deps`). Tests intentionally use Chromium with SwiftShader arguments and a 640x480 viewport. The browser suite verifies all shaders, the 1080p pixel budget, frozen feedback while paused, sampler isolation, and context-loss recovery.

As of 2026-11-11, `npm test` and `npm run build` pass. A local browser run could not start only because the matching Playwright Chromium binary was not installed.

## Build and deployment

- Vite uses `base: './'` so GitHub Pages assets resolve from a project subpath.
- `npm run build` writes ignored output to `dist/`.
- The Pages workflow on `main` installs with `npm ci`, runs unit and browser tests, builds, and uploads `dist/`.
- Do not commit `dist/`, Playwright reports/results, or dependency directories.

## Working-tree hygiene

- Always inspect `git status --short` before editing and preserve unrelated user changes.
- This checkout may show nearly every tracked text file as modified solely because CRLF/LF endings differ on the Windows-mounted filesystem. Verify with `git diff --ignore-cr-at-eol` before treating those entries as semantic changes. Do not normalize line endings across the repository as part of an unrelated task.
- Prefer focused patches; avoid editing generated `docs/assets/*`, `package-lock.json`, or presets unless the task requires it.
- Keep the existing module style and avoid introducing a new framework/state layer for a localized change.
