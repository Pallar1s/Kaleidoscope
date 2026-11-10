const JOINTS_WIDTH = 5
const JOINT_END_SIZE = 10
const MULTIPASS_ITERATIONS = 1  // Number of render passes for multipass shaders (1 = default, 2+ = more iterations)
const MAX_RENDER_PIXELS = 2_073_600

const VERTEX_SHADER_SOURCE = `#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const shaderModules = import.meta.glob('./shaders/*.js', { eager: true })

function parseColor(color) {
  if (!color || color.length !== 9) return { r: 255, g: 255, b: 255, a: 255 }
  
  const alpha = parseInt(color.substring(1, 3), 16)
  const r = parseInt(color.substring(3, 5), 16)
  const g = parseInt(color.substring(5, 7), 16)
  const b = parseInt(color.substring(7, 9), 16)
  
  return { r, g, b, a: alpha }
}

function createShader(gl, type, source, name = 'unknown') {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(`Shader error (${name}):`, gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
  }
  return program
}

function createShaderProgram(gl, fragmentShaderSource, needsTransform = false, name = 'unknown') {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE, name + '_vertex')
  
  let fragSource = fragmentShaderSource.trim()
  if (needsTransform) {
    fragSource = fragSource.replace(/gl_FragColor/g, 'fragColor')
    fragSource = fragSource.replace(/texture2D\(/g, 'texture(')
    
    if (!fragSource.includes('out vec4 fragColor')) {
      if (fragSource.startsWith('#version')) {
        if (!fragSource.includes('precision highp float')) {
          fragSource = fragSource.replace('#version', '#version\nprecision highp float;')
        } else if (!fragSource.match(/precision\s+highp\s+float\s*;/)) {
          fragSource = fragSource.replace('precision highp float', 'precision highp float;')
        }
        if (!fragSource.includes('out vec4 fragColor')) {
          fragSource = fragSource.replace('precision highp float;', 'precision highp float;\nout vec4 fragColor;')
        }
      } else {
        let cleanSource = fragSource.replace(/^\s*precision\s+highp\s+float\s*;\s*/m, '')
        fragSource = `#version 300 es
precision highp float;
out vec4 fragColor;

` + cleanSource
      }
    }
  }
  
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragSource, name + '_fragment')
  if (!vertexShader || !fragmentShader) {
    if (vertexShader) gl.deleteShader(vertexShader)
    if (fragmentShader) gl.deleteShader(fragmentShader)
    return null
  }
  
  const program = createProgram(gl, vertexShader, fragmentShader)
  gl.deleteShader(vertexShader)
  gl.deleteShader(fragmentShader)
  if (!program) return null

  const positionBuffer = gl.createBuffer()
  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1, 1, -1, -1, 1,
    -1, 1, 1, -1, 1, 1
  ]), gl.STATIC_DRAW)

  const positionLocation = gl.getAttribLocation(program, 'a_position')
  if (positionLocation >= 0) {
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
  }
  gl.bindVertexArray(null)
  gl.bindBuffer(gl.ARRAY_BUFFER, null)

  const err = gl.getError()
  if (err !== gl.NO_ERROR) {
    console.error('WebGL error after creating program:', err)
  }

  return { handle: program, positionBuffer, vao }
}

function getUniforms(gl, program) {
  return {
    u_time: gl.getUniformLocation(program, 'u_time'),
    u_resolution: gl.getUniformLocation(program, 'u_resolution'),
    u_emitterX: gl.getUniformLocation(program, 'u_emitterX'),
    u_emitterY: gl.getUniformLocation(program, 'u_emitterY'),
    u_emitter: gl.getUniformLocation(program, 'u_emitter'),
    u_emitterVelX: gl.getUniformLocation(program, 'u_emitterVelX'),
    u_emitterVelY: gl.getUniformLocation(program, 'u_emitterVelY'),
    u_mouse: gl.getUniformLocation(program, 'u_mouse'),
    u_timeDelta: gl.getUniformLocation(program, 'u_timeDelta'),
    u_frameRate: gl.getUniformLocation(program, 'u_frameRate'),
    u_frame: gl.getUniformLocation(program, 'u_frame'),
    u_sampleRate: gl.getUniformLocation(program, 'u_sampleRate'),
    iChannel0: gl.getUniformLocation(program, 'iChannel0'),
    iChannel1: gl.getUniformLocation(program, 'iChannel1'),
    iChannel2: gl.getUniformLocation(program, 'iChannel2'),
    iChannel3: gl.getUniformLocation(program, 'iChannel3')
  }
}

function createFBO(gl, width, height) {
  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, width, height, 0, gl.RGBA, gl.HALF_FLOAT, null)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

  const framebuffer = gl.createFramebuffer()
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)

  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
  if (status !== gl.FRAMEBUFFER_COMPLETE) {
    console.error(`Framebuffer is incomplete (${status}) at ${width}x${height}`)
    gl.deleteFramebuffer(framebuffer)
    gl.deleteTexture(texture)
    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    return null
  }

  gl.viewport(0, 0, width, height)
  gl.clearColor(0, 0, 0, 0)
  gl.clear(gl.COLOR_BUFFER_BIT)

  gl.bindFramebuffer(gl.FRAMEBUFFER, null)

  return { texture, framebuffer, width, height }
}

function createBufferPassFBOs(gl, width, height) {
  const ping = createFBO(gl, width, height)
  if (!ping) return null

  const pong = createFBO(gl, width, height)
  if (!pong) {
    gl.deleteTexture(ping.texture)
    gl.deleteFramebuffer(ping.framebuffer)
    return null
  }
  return { ping, pong, current: 0 }
}

const BUFFER_ORDER = ['buffera', 'bufferb', 'bufferc', 'bufferd']

const BUFFER_CHANNELS = {
  buffera: { iChannel0: 'self', iChannel1: 'noise' },
  bufferb: { iChannel0: 'buffera', iChannel1: 'noise' },
  bufferc: { iChannel0: 'bufferb', iChannel1: 'noise' },
  bufferd: { iChannel0: 'bufferc', iChannel1: 'noise' }
}

function createNoiseTexture(gl, size = 256) {
  const data = new Uint8Array(size * size * 4)
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.random() * 256
    data[i + 1] = Math.random() * 256
    data[i + 2] = Math.random() * 256
    data[i + 3] = 255
  }

  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, data)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)

  return texture
}

function discoverShaders() {
  const shaders = []
  
  for (const path in shaderModules) {
    const module = shaderModules[path]
    const fileName = path.split('/').pop().replace('.js', '')
    
    const keys = Object.keys(module).filter(key => key.endsWith('FragmentShader'))
    
    if (keys.length > 1) {
      const common = module.common || ''
      const channels = module.channels || {}
      const passSizes = module.passSizes || {}
      const passes = {}
      
      for (const key of keys) {
        const passName = key.replace('FragmentShader', '').toLowerCase()

        
        let channelConfig = channels[passName] || {}

        if (Object.keys(channelConfig).length === 0) {
          for (const chKey of Object.keys(channels)) {
            if (chKey.toLowerCase() === passName) {
              channelConfig = channels[chKey]

              break
            }
          }
        }
        
        passes[passName] = {
          fragmentShader: common + module[key],
          channels: channelConfig,
          size: passSizes[passName] || null
        }
      }
      
      shaders.push({ name: fileName, type: 'multi', passes })
    } else if (keys.length === 1) {
      shaders.push({
        name: fileName,
        type: 'single',
        fragmentShader: module[keys[0]],
        channelSources: module.channelSources || {},
        trailMipmaps: module.trailMipmaps === true
      })
    }
  }
  
  return shaders.sort((left, right) => left.name.localeCompare(right.name))
}

export const availableShaders = discoverShaders()

function destroyGpuProgram(gl, gpuProgram) {
  if (!gpuProgram) return
  gl.deleteVertexArray(gpuProgram.vao)
  gl.deleteBuffer(gpuProgram.positionBuffer)
  gl.deleteProgram(gpuProgram.handle)
}

function compileShaderDefinition(gl, shader) {
  if (shader.type === 'single') {
    const gpuProgram = createShaderProgram(gl, shader.fragmentShader, true, shader.name)
    if (!gpuProgram) return null
    return {
      name: shader.name,
      type: 'single',
      gpuProgram,
      uniforms: getUniforms(gl, gpuProgram.handle),
      channelSources: shader.channelSources || {},
      trailMipmaps: shader.trailMipmaps === true
    }
  }

  const compiled = { name: shader.name, type: 'multi', passes: {} }
  for (const [passName, pass] of Object.entries(shader.passes)) {
    const gpuProgram = createShaderProgram(gl, pass.fragmentShader, true, `${shader.name}_${passName}`)
    if (!gpuProgram) {
      Object.values(compiled.passes).forEach(item => destroyGpuProgram(gl, item.gpuProgram))
      return null
    }
    compiled.passes[passName] = {
      gpuProgram,
      uniforms: getUniforms(gl, gpuProgram.handle),
      channels: pass.channels,
      size: pass.size
    }
  }
  return compiled
}

export function initWebGL(canvas, trailCanvas) {
  const gl = canvas.getContext('webgl2')
  if (!gl) return null

  const supportsFloatTargets = Boolean(gl.getExtension('EXT_color_buffer_float'))
  if (!supportsFloatTargets) console.warn('EXT_color_buffer_float is unavailable; multipass effects are disabled')

  const shaderPrograms = new Map()
  const failedShaders = new Set()
  const shaderDefinitions = new Map(availableShaders.map(shader => [shader.name, shader]))
  const noiseTexture = createNoiseTexture(gl)

  const trailCtx = trailCanvas.getContext('2d')
  const trailTexture = gl.createTexture()
  let trailTextureWidth = 0
  let trailTextureHeight = 0
  let lastTrailUploadFrame = -1
  let lastUploadHadMipmaps = false
  let trailDirty = true

  gl.bindTexture(gl.TEXTURE_2D, trailTexture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

  function updateTrailTexture(generateMipmaps = false, frame = 0) {
    if (lastTrailUploadFrame === frame) {
      if (generateMipmaps && !lastUploadHadMipmaps) {
        gl.bindTexture(gl.TEXTURE_2D, trailTexture)
        gl.generateMipmap(gl.TEXTURE_2D)
        lastUploadHadMipmaps = true
      }
      return
    }
    if (!trailDirty && trailTextureWidth === trailCanvas.width && trailTextureHeight === trailCanvas.height) {
      gl.bindTexture(gl.TEXTURE_2D, trailTexture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, generateMipmaps ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR)
      if (generateMipmaps && !lastUploadHadMipmaps) gl.generateMipmap(gl.TEXTURE_2D)
      lastUploadHadMipmaps = generateMipmaps
      lastTrailUploadFrame = frame
      return
    }
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
    gl.bindTexture(gl.TEXTURE_2D, trailTexture)
    if (trailTextureWidth !== trailCanvas.width || trailTextureHeight !== trailCanvas.height) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, trailCanvas)
      trailTextureWidth = trailCanvas.width
      trailTextureHeight = trailCanvas.height
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, trailCanvas)
    }
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, generateMipmaps ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR)
    if (generateMipmaps) gl.generateMipmap(gl.TEXTURE_2D)
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
    lastTrailUploadFrame = frame
    lastUploadHadMipmaps = generateMipmaps
    trailDirty = false
  }

  return {
    gl,
    shaderPrograms,
    failedShaders,
    runtimeUnavailableEffects: new Set(),
    shaderDefinitions,
    effectResources: new Map(),
    frameCounters: new Map(),
    renderSequence: 0,
    activeEffect: null,
    supportsFloatTargets,
    noiseTexture,
    trailCtx,
    trailCanvas,
    trailTexture,
    updateTrailTexture,
    markTrailDirty: () => { trailDirty = true }
  }
}

function setUniforms(gl, uniforms, width, height, time, extra) {
  const u = uniforms
  
  if (u.u_time) gl.uniform1f(u.u_time, time * 0.001)
  if (u.u_resolution) gl.uniform2f(u.u_resolution, width, height)
  if (u.u_timeDelta && extra.timeDelta !== undefined) gl.uniform1f(u.u_timeDelta, extra.timeDelta)
  if (u.u_frameRate && extra.frameRate !== undefined) gl.uniform1f(u.u_frameRate, extra.frameRate)
  if (u.u_frame) gl.uniform1i(u.u_frame, extra.frame || 0)
  if (u.u_sampleRate) gl.uniform1f(u.u_sampleRate, 44100)
  
  if (u.u_emitterX && Number.isFinite(extra.emitterX)) gl.uniform1f(u.u_emitterX, extra.emitterX)
  if (u.u_emitterY && Number.isFinite(extra.emitterY)) gl.uniform1f(u.u_emitterY, extra.emitterY)
  if (u.u_emitter && Number.isFinite(extra.emitterX) && Number.isFinite(extra.emitterY)) gl.uniform2f(u.u_emitter, extra.emitterX, extra.emitterY)
  if (u.u_emitterVelX && Number.isFinite(extra.emitterVelX)) gl.uniform1f(u.u_emitterVelX, extra.emitterVelX)
  if (u.u_emitterVelY && Number.isFinite(extra.emitterVelY)) gl.uniform1f(u.u_emitterVelY, extra.emitterVelY)
  if (u.u_mouse) {
    const mouseX = Number.isFinite(extra.emitterX) ? extra.emitterX : 0
    const mouseY = Number.isFinite(extra.emitterY) ? height - extra.emitterY : 0
    gl.uniform4f(u.u_mouse, mouseX, mouseY, extra.mouseZ || 0, extra.mouseZ || 0)
  }
}

function bindChannel(gl, uniforms, name, texture, unit) {
  const location = uniforms[name]
  if (location === null || location === undefined) return
  if (!texture) return
  gl.activeTexture(gl.TEXTURE0 + unit)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.uniform1i(location, unit)
}

function drawQuad(gl, gpuProgram, uniforms, width, height, time, extra) {
  gl.bindVertexArray(gpuProgram.vao)
  setUniforms(gl, uniforms, width, height, time, extra)
  gl.drawArrays(gl.TRIANGLES, 0, 6)
  gl.bindVertexArray(null)
}

function destroyFboPair(gl, pair) {
  if (!pair) return
  gl.deleteTexture(pair.ping.texture)
  gl.deleteFramebuffer(pair.ping.framebuffer)
  gl.deleteTexture(pair.pong.texture)
  gl.deleteFramebuffer(pair.pong.framebuffer)
}

function destroyEffectResources(webgl, effect) {
  const resources = webgl.effectResources.get(effect)
  if (!resources) return
  Object.values(resources.buffers).forEach(pair => destroyFboPair(webgl.gl, pair))
  webgl.effectResources.delete(effect)
}

function getCompiledShader(webgl, effect) {
  if (webgl.failedShaders.has(effect)) return null
  if (webgl.shaderPrograms.has(effect)) return webgl.shaderPrograms.get(effect)

  const definition = webgl.shaderDefinitions.get(effect)
  if (!definition) return null
  if (definition.type === 'multi' && !webgl.supportsFloatTargets) {
    webgl.failedShaders.add(effect)
    return null
  }

  const compiled = compileShaderDefinition(webgl.gl, definition)
  if (!compiled) {
    webgl.failedShaders.add(effect)
    return null
  }
  webgl.shaderPrograms.set(effect, compiled)
  return compiled
}

function getPassSize(pass, width, height) {
  if (!pass.size) return { width, height }
  return {
    width: Math.max(1, Math.min(width, pass.size.width || width)),
    height: Math.max(1, Math.min(height, pass.size.height || height))
  }
}

function ensureEffectResources(webgl, shader, width, height) {
  const existing = webgl.effectResources.get(shader.name)
  if (existing?.width === width && existing?.height === height) return existing
  destroyEffectResources(webgl, shader.name)

  const resources = { width, height, buffers: {} }
  for (const bufferName of BUFFER_ORDER) {
    const pass = shader.passes[bufferName]
    if (!pass) continue
    const size = getPassSize(pass, width, height)
    const pair = createBufferPassFBOs(webgl.gl, size.width, size.height)
    if (!pair) {
      Object.values(resources.buffers).forEach(item => destroyFboPair(webgl.gl, item))
      return null
    }
    resources.buffers[bufferName] = pair
  }
  webgl.effectResources.set(shader.name, resources)
  return resources
}

function getReadTarget(pair) {
  return pair.current === 0 ? pair.ping : pair.pong
}

function getWriteTarget(pair) {
  return pair.current === 0 ? pair.pong : pair.ping
}

function getReadTexture(resources, bufferName) {
  const pair = resources.buffers[bufferName]
  return pair ? getReadTarget(pair).texture : null
}

function renderBufferPass(webgl, shader, passName, resources, written, width, height, time, extra) {
  const { gl, noiseTexture } = webgl
  const pass = shader.passes[passName]
  const pair = resources.buffers[passName]
  if (!pass || !pair) return

  const input = getReadTarget(pair)
  const output = getWriteTarget(pair)
  gl.bindFramebuffer(gl.FRAMEBUFFER, output.framebuffer)
  gl.viewport(0, 0, output.width, output.height)
  gl.disable(gl.BLEND)
  gl.useProgram(pass.gpuProgram.handle)

  const defaults = BUFFER_CHANNELS[passName] || {}
  const channels = { ...defaults, ...(pass.channels || {}) }
  for (let i = 0; i < 4; i++) {
    const channelName = `iChannel${i}`
    if (pass.uniforms[channelName] === null) continue
    const source = channels[channelName] || 'noise'

    let texture = noiseTexture
    if (source === 'self' || source === passName) {
      texture = input.texture
    } else if (source !== 'noise') {
      const sourcePair = resources.buffers[source]
      if (sourcePair) {
        texture = written.has(source)
          ? getWriteTarget(sourcePair).texture
          : getReadTarget(sourcePair).texture
      }
    }
    bindChannel(gl, pass.uniforms, channelName, texture, i)
  }

  drawQuad(gl, pass.gpuProgram, pass.uniforms, width, height, time, extra)
  written.add(passName)
}

export function resetWebGLEffect(webgl, effect = webgl.activeEffect) {
  if (!webgl || !effect) return
  destroyEffectResources(webgl, effect)
  webgl.frameCounters.set(effect, 0)
  if (webgl.activeEffect === effect) webgl.activeEffect = null
}

export function resizeWebGL(webgl) {
  if (!webgl) return
  for (const effect of [...webgl.effectResources.keys()]) destroyEffectResources(webgl, effect)
  webgl.frameCounters.clear()
  webgl.runtimeUnavailableEffects.clear()
  webgl.activeEffect = null
}

export function disposeWebGL(webgl) {
  if (!webgl) return
  resizeWebGL(webgl)
  for (const shader of webgl.shaderPrograms.values()) {
    if (shader.type === 'single') destroyGpuProgram(webgl.gl, shader.gpuProgram)
    else Object.values(shader.passes).forEach(pass => destroyGpuProgram(webgl.gl, pass.gpuProgram))
  }
  webgl.shaderPrograms.clear()
  webgl.gl.deleteTexture(webgl.noiseTexture)
  webgl.gl.deleteTexture(webgl.trailTexture)
}

export function renderWebGL(webgl, time, effect, emitterX, emitterY, emitterVelX, emitterVelY, deltaTime = 0.016, interactionZ = 0, advanceSimulation = true) {
  const { gl, noiseTexture } = webgl
  if (webgl.runtimeUnavailableEffects.has(effect) || gl.isContextLost()) return false
  if (webgl.activeEffect && webgl.activeEffect !== effect) {
    resetWebGLEffect(webgl, webgl.activeEffect)
  }
  const shader = getCompiledShader(webgl, effect)
  if (!shader) return false

  if (webgl.activeEffect !== effect) {
    resetWebGLEffect(webgl, effect)
    webgl.activeEffect = effect
  }

  const width = gl.canvas.width
  const height = gl.canvas.height
  let resources = null
  if (shader.type === 'multi') {
    resources = ensureEffectResources(webgl, shader, width, height)
    if (!resources) {
      webgl.runtimeUnavailableEffects.add(effect)
      return false
    }
  }

  const previousFrame = webgl.frameCounters.get(effect) || 0
  const frame = advanceSimulation ? previousFrame + 1 : previousFrame
  if (advanceSimulation) webgl.frameCounters.set(effect, frame)
  const uploadFrame = ++webgl.renderSequence
  const extra = {
    emitterX,
    emitterY,
    emitterVelX,
    emitterVelY,
    timeDelta: deltaTime,
    frameRate: deltaTime > 0 ? 1 / deltaTime : 60,
    frame,
    mouseZ: interactionZ
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
  gl.viewport(0, 0, width, height)
  gl.clearColor(0, 0, 0, 0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

  if (shader.type === 'single') {
    gl.useProgram(shader.gpuProgram.handle)
    for (let i = 0; i < 4; i++) {
      const channelName = `iChannel${i}`
      if (shader.uniforms[channelName] === null) continue
      const source = shader.channelSources[channelName] || 'noise'
      let texture = source === 'self' ? null : noiseTexture
      if (source === 'trail') {
        webgl.updateTrailTexture(shader.trailMipmaps, uploadFrame)
        texture = webgl.trailTexture
      }
      bindChannel(gl, shader.uniforms, channelName, texture, i)
    }
    drawQuad(gl, shader.gpuProgram, shader.uniforms, width, height, time, extra)
    return true
  }

  const lastBufferName = [...BUFFER_ORDER].reverse().find(bufferName => shader.passes[bufferName]) || null

  if (advanceSimulation) {
    for (let iteration = 0; iteration < MULTIPASS_ITERATIONS; iteration++) {
      const written = new Set()
      for (const bufferName of BUFFER_ORDER) {
        if (!shader.passes[bufferName]) continue
        renderBufferPass(webgl, shader, bufferName, resources, written, width, height, time, extra)
      }
      for (const bufferName of written) {
        const pair = resources.buffers[bufferName]
        pair.current = 1 - pair.current
      }
    }
  }

  const finalOutput = lastBufferName ? getReadTexture(resources, lastBufferName) : noiseTexture
  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
  gl.viewport(0, 0, width, height)
  gl.enable(gl.BLEND)

  const imagePass = shader.passes.image
  if (!imagePass) return false
  gl.useProgram(imagePass.gpuProgram.handle)
  const imageChannels = imagePass.channels || {}

  for (let i = 0; i < 4; i++) {
    const channelName = `iChannel${i}`
    if (imagePass.uniforms[channelName] === null) continue
    const source = imageChannels[channelName]
    let texture = i === 0 ? finalOutput : noiseTexture
    if (source === 'trail') {
      webgl.updateTrailTexture(false, uploadFrame)
      texture = webgl.trailTexture
    } else if (source === 'noise') {
      texture = noiseTexture
    } else if (source === 'final' || source === 'self') {
      texture = finalOutput
    } else if (source && source !== 'final' && source !== 'self') {
      texture = getReadTexture(resources, source) || noiseTexture
    }
    bindChannel(gl, imagePass.uniforms, channelName, texture, i)
  }

  drawQuad(gl, imagePass.gpuProgram, imagePass.uniforms, width, height, time, extra)
  return true
}

export function renderTrail(webgl, joints, prevJoints, trailWidth = 2) {
  const { trailCtx } = webgl
  if (!trailCtx || !joints || !prevJoints) return
  
  const cssToFramebuffer = trailCtx.canvas.width / Math.max(1, window.innerWidth)
  trailCtx.lineWidth = trailWidth * cssToFramebuffer
  
  let changed = false
  joints.forEach((joint, index) => {
    if (joint.trailEnabled && prevJoints[index]) {
      const color = parseColor(joint.color)
      trailCtx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a / 255})`
      trailCtx.beginPath()
      trailCtx.moveTo(prevJoints[index].endX, prevJoints[index].endY)
      trailCtx.lineTo(joint.endX, joint.endY)
      trailCtx.stroke()
      changed = true
    }
  })
  if (changed) webgl.markTrailDirty()
}

export function getRenderSize(gl = null, scale = 1) {
  const dpr = window.devicePixelRatio || 1
  const requestedWidth = Math.max(1, window.innerWidth * dpr * scale)
  const requestedHeight = Math.max(1, window.innerHeight * dpr * scale)
  const maxTextureSize = gl ? gl.getParameter(gl.MAX_TEXTURE_SIZE) : 8192
  const maxViewport = gl ? gl.getParameter(gl.MAX_VIEWPORT_DIMS) : [8192, 8192]
  const dimensionFactor = Math.min(
    1,
    Math.min(maxTextureSize, maxViewport[0]) / requestedWidth,
    Math.min(maxTextureSize, maxViewport[1]) / requestedHeight
  )
  const pixelFactor = Math.min(1, Math.sqrt(MAX_RENDER_PIXELS / (requestedWidth * requestedHeight)))
  const factor = Math.min(dimensionFactor, pixelFactor)
  const width = Math.max(1, Math.floor(requestedWidth * factor))
  const height = Math.max(1, Math.floor(requestedHeight * factor))
  return { width, height, requestedScale: scale, effectiveScale: scale * factor, dpr }
}

export function resizeCanvas(canvas, gl = null, size = getRenderSize(gl)) {
  canvas.width = size.width
  canvas.height = size.height
  if (gl) gl.viewport(0, 0, canvas.width, canvas.height)
  return size
}

export function resizeTrailCanvas(trailCanvas, size) {
  trailCanvas.width = size.width
  trailCanvas.height = size.height
}

export function clearTrail(trailCanvas) {
  const ctx = trailCanvas.getContext('2d')
  ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height)
}

export function renderJoints(ctx, joints) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  const cssToFramebuffer = ctx.canvas.width / Math.max(1, window.innerWidth)

  joints.forEach((joint) => {
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = JOINTS_WIDTH * cssToFramebuffer
    ctx.beginPath()
    ctx.moveTo(joint.startX, joint.startY)
    ctx.lineTo(joint.endX, joint.endY)
    ctx.stroke()

    ctx.fillStyle = '#ff0000'
    ctx.beginPath()
    ctx.arc(joint.endX, joint.endY, JOINT_END_SIZE * cssToFramebuffer / 2, 0, Math.PI * 2)
    ctx.fill()
  })
}
