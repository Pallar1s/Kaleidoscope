# Kaleidoscope - WebGL SPA application

A beautiful sandbox exploring shader effects and joints animation

## Prerequisites

- Node.js 22.12+
- npm
- A browser with WebGL 2 support (`EXT_color_buffer_float` is required for multipass effects)

## Installation

```bash
npm ci
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Tests

```bash
npm test
npx playwright install chromium
npm run test:browser
```

The browser smoke test compiles every shader in WebGL, verifies the render-size budget and pause semantics, and exercises context-loss recovery.

## Features

- Real-time WebGL shader rendering
- Mouse- and joint-driven shader emitters
- Data-driven joint presets
- Single-pass and feedback/multipass shaders
- High-DPI rendering within a bounded GPU-memory budget

## Controls

- Choose a joint preset and shader from the settings panel.
- Drag on the canvas to use the pointer as the shader emitter.
- Joint Emission controls the color intensity contributed by joints in compatible fluid effects; 100% matches the original strength.
- Trail Overlay only shows or hides the unprocessed 2D trail layer. Shaders that declare a `trail` channel continue receiving the hidden trail texture.
- Trail Emission controls whether joints add new trail segments; Clear Trail removes the accumulated history explicitly.
- Pause stops joint motion, shader time, trail accumulation, and feedback passes.
- Resolution is capped by the GPU texture limit and a 1080p render budget; the panel shows the effective scale when capped.

## Preset format

Presets live in `presets/presets.json`. `Size` is a relative segment length, `Speed` is stored in hundredths of a degree per second, `Enabled` controls trail emission for that segment, and `JointColor` uses `#AARRGGBB`.
