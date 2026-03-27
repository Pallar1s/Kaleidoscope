const JOINTS_WIDTH = 5
const JOINT_END_SIZE = 10

const VERTEX_SHADER_SOURCE_WEBGL1 = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const VERTEX_SHADER_SOURCE_WEBGL2 = `#version 300 es
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

function createShaderProgram(gl, fragmentShaderSource, isWebGL2 = false, needsTransform = false, name = 'unknown') {
  const vertexSource = isWebGL2 ? VERTEX_SHADER_SOURCE_WEBGL2 : VERTEX_SHADER_SOURCE_WEBGL1
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource, name + '_vertex')
  
  let fragSource = fragmentShaderSource
  if (isWebGL2 && needsTransform) {
    // Добавляем #version 300 es если его нет
    if (!fragmentShaderSource.includes('#version')) {
      fragSource = `#version 300 es
precision highp float;

` + fragmentShaderSource
    }
    // Заменяем gl_FragColor на fragColor если используется
    fragSource = fragSource.replace(/gl_FragColor/g, 'fragColor')
    // Добавляем out vec4 fragColor; если его нет
    if (!fragmentShaderSource.includes('out vec4 fragColor')) {
      fragSource = fragSource.replace('precision highp float;', 'precision highp float;\nout vec4 fragColor;')
    }
  }
  

  
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragSource, name + '_fragment')
  if (!vertexShader || !fragmentShader) return null
  
  const program = createProgram(gl, vertexShader, fragmentShader)
  if (!program) return null

  const positionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1, 1, -1, -1, 1,
    -1, 1, 1, -1, 1, 1
  ]), gl.STATIC_DRAW)

  const positionLocation = gl.getAttribLocation(program, 'a_position')
  gl.enableVertexAttribArray(positionLocation)
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

  const err = gl.getError()
  if (err !== gl.NO_ERROR) {
    console.error('WebGL error after creating program:', err)
  }

  return program
}

function getUniforms(gl, program) {
  return {
    u_time: gl.getUniformLocation(program, 'u_time'),
    u_resolution: gl.getUniformLocation(program, 'u_resolution'),
    u_emitterX: gl.getUniformLocation(program, 'u_emitterX'),
    u_emitterY: gl.getUniformLocation(program, 'u_emitterY'),
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
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

  const framebuffer = gl.createFramebuffer()
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)

  gl.bindFramebuffer(gl.FRAMEBUFFER, null)

  return { texture, framebuffer }
}

function createBufferPassFBOs(gl, width, height) {
  return {
    ping: createFBO(gl, width, height),
    pong: createFBO(gl, width, height),
    current: 0
  }
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
      console.log(`${fileName}: module.channels keys =`, Object.keys(channels))
      const passes = {}
      
      for (const key of keys) {
        const passName = key.replace('FragmentShader', '').toLowerCase()
        console.log(`${fileName}: key=${key}, passName=${passName}`)
        
        let channelConfig = channels[passName] || {}
        console.log(`${fileName}: channels['${passName}'] =`, channelConfig)
        if (Object.keys(channelConfig).length === 0) {
          for (const chKey of Object.keys(channels)) {
            if (chKey.toLowerCase() === passName) {
              channelConfig = channels[chKey]
              console.log(`${fileName}: found via fallback chKey=${chKey}`)
              break
            }
          }
        }
        
        passes[passName] = {
          fragmentShader: common + module[key],
          channels: channelConfig
        }
      }
      
      shaders.push({ name: fileName, type: 'multi', passes })
    } else if (keys.length === 1) {
      shaders.push({
        name: fileName,
        type: 'single',
        fragmentShader: module[keys[0]]
      })
    }
  }
  
  return shaders
}

export const availableShaders = discoverShaders()
console.log('availableShaders:', JSON.stringify(availableShaders.filter(s => s.name === 'fluidSim').map(s => ({
  name: s.name,
  passes: Object.keys(s.passes).map(k => ({ key: k, channels: s.passes[k].channels }))
}))))

export function initWebGL(canvas, trailCanvas) {
  let gl = canvas.getContext('webgl2')
  const isWebGL2 = !!gl
  console.log('WebGL version:', isWebGL2 ? 'WebGL2' : 'WebGL1')
  if (!gl) return null

  gl.getExtension('OES_texture_float')
  gl.getExtension('OES_texture_float_linear')
  gl.getExtension('EXT_shader_texture_lod')

  const shaderPrograms = {}
  const noiseTexture = createNoiseTexture(gl)
  const fbos = {
    buffera: { ping: null, pong: null, current: 0 },
    bufferb: { ping: null, pong: null, current: 0 },
    bufferc: { ping: null, pong: null, current: 0 },
    bufferd: { ping: null, pong: null, current: 0 }
  }

  for (const shader of availableShaders) {
    if (shader.type === 'multi') {
      shaderPrograms[shader.name] = { type: 'multi', passes: {} }
      
      for (const [passName, pass] of Object.entries(shader.passes)) {
        const program = createShaderProgram(gl, pass.fragmentShader, isWebGL2, true, `${shader.name}_${passName}`)
        if (program) {
          shaderPrograms[shader.name].passes[passName] = {
            program,
            uniforms: getUniforms(gl, program),
            channels: pass.channels
          }
        }
      }
    } else {
      const program = createShaderProgram(gl, shader.fragmentShader, isWebGL2, isWebGL2, shader.name)
      if (program) {
        shaderPrograms[shader.name] = {
          type: 'single',
          program,
          uniforms: getUniforms(gl, program)
        }
      }
    }
  }

  const trailCtx = trailCanvas.getContext('2d')

  return { gl, shaderPrograms, noiseTexture, fbos, trailCtx }
}

function setUniforms(gl, uniforms, width, height, time, extra) {
  const u = uniforms
  
  if (u.u_time) gl.uniform1f(u.u_time, time * 0.001)
  if (u.u_resolution) gl.uniform2f(u.u_resolution, width, height)
  if (u.u_timeDelta && extra.timeDelta) gl.uniform1f(u.u_timeDelta, extra.timeDelta)
  if (u.u_frameRate && extra.frameRate) gl.uniform1f(u.u_frameRate, extra.frameRate)
  if (u.u_frame) gl.uniform1i(u.u_frame, extra.frame || 0)
  if (u.u_sampleRate) gl.uniform1f(u.u_sampleRate, 44100)
  
  if (u.u_emitterX && extra.emitterX !== undefined) gl.uniform1f(u.u_emitterX, extra.emitterX)
  if (u.u_emitterY && extra.emitterY !== undefined) gl.uniform1f(u.u_emitterY, extra.emitterY)
  if (u.u_emitterVelX && extra.emitterVelX !== undefined) gl.uniform1f(u.u_emitterVelX, extra.emitterVelX)
  if (u.u_emitterVelY && extra.emitterVelY !== undefined) gl.uniform1f(u.u_emitterVelY, extra.emitterVelY)
}

function bindChannel(gl, uniforms, name, texture, unit) {
  const location = uniforms[name]
  if (location === null || location === undefined) return
  if (!texture) return
  gl.activeTexture(gl.TEXTURE0 + unit)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.uniform1i(location, unit)
}

function drawQuad(gl, uniforms, width, height, time, extra) {
  setUniforms(gl, uniforms, width, height, time, extra)
  gl.drawArrays(gl.TRIANGLES, 0, 6)
}

export function resizeFBOs(gl, fbos, width, height) {
  for (const bufferName of BUFFER_ORDER) {
    const fbo = fbos[bufferName]
    if (fbo.ping) {
      gl.deleteTexture(fbo.ping.texture)
      gl.deleteFramebuffer(fbo.ping.framebuffer)
      gl.deleteTexture(fbo.pong.texture)
      gl.deleteFramebuffer(fbo.pong.framebuffer)
    }
    fbos[bufferName] = createBufferPassFBOs(gl, width, height)
  }
}

function getBufferTexture(fbos, bufferName) {
  if (!bufferName || bufferName === 'self') return null
  const fbo = fbos[bufferName]
  if (!fbo || !fbo.ping) return null
  return fbo.current === 0 ? fbo.pong.texture : fbo.ping.texture
}

function getLatestOutput(fbos, bufferName) {
  if (!bufferName) return null
  const fbo = fbos[bufferName]
  if (!fbo || !fbo.ping) return null
  return fbo.ping.texture
}

function getPreviousOutput(fbos, bufferName) {
  if (!bufferName) return null
  const fbo = fbos[bufferName]
  if (!fbo || !fbo.ping) return null
  return fbo.pong.texture
}

function getCurrentFBO(fbos, bufferName) {
  if (!bufferName) return null
  const fbo = fbos[bufferName]
  return fbo ? fbo.current : 0
}

function getFBOOutput(fbos, bufferName) {
  if (!bufferName) return null
  const fbo = fbos[bufferName]
  return fbo ? fbo.ping.texture : null
}

function renderBufferPass(gl, shader, passName, fbos, noiseTexture, width, height, time, extra) {
  const pass = shader.passes[passName]
  if (!pass) return null

  const fbo = fbos[passName]
  const inputFBO = fbo.current === 0 ? fbo.ping : fbo.pong
  const outputFBO = fbo.current === 0 ? fbo.pong : fbo.ping


  gl.bindFramebuffer(gl.FRAMEBUFFER, outputFBO.framebuffer)
  gl.viewport(0, 0, width, height)

  gl.useProgram(pass.program)

  const defaultChannels = BUFFER_CHANNELS[passName] || {}
  const customChannels = pass.channels || {}
  const channels = Object.keys(customChannels).length > 0 ? { ...defaultChannels, ...customChannels } : defaultChannels
  console.log(`${passName}: merged=${JSON.stringify(channels)}`)
  console.log(`${passName}: default=${JSON.stringify(defaultChannels)}, custom=${JSON.stringify(customChannels)}, merged=${JSON.stringify(channels)}`)
  
  for (let i = 0; i < 4; i++) {
    const channelName = `iChannel${i}`
    const channelDef = channels[channelName]
    const loc = pass.uniforms[channelName]
    
    if (channelDef && loc !== null && loc !== undefined) {
      let texture = noiseTexture
      let source = 'noise'
      if (channelDef === 'self') {
        texture = inputFBO.texture
        source = 'inputFBO'
      } else if (channelDef !== 'noise') {
        texture = getBufferTexture(fbos, channelDef) || noiseTexture
        source = channelDef
      }
      if (texture) {
        bindChannel(gl, pass.uniforms, channelName, texture, i)
      }
      console.log(`  ${passName}.${channelName} -> ${source}`)
    } else if (loc !== null && loc !== undefined) {
      console.log(`  ${passName}.${channelName} -> (no binding, channelDef=${channelDef})`)
    }
  }

  drawQuad(gl, pass.uniforms, width, height, time, extra)

  fbos[passName].current = 1 - fbos[passName].current

  return outputFBO.texture
}

export function renderWebGL(webgl, time, effect, emitterX, emitterY, emitterVelX, emitterVelY, deltaTime = 0.016) {
  const { gl, shaderPrograms, noiseTexture, fbos } = webgl

  gl.clearColor(0, 0, 0, 0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
  
  const extra = {
    emitterX, emitterY, emitterVelX, emitterVelY,
    timeDelta: deltaTime,
    frameRate: deltaTime > 0 ? 1 / deltaTime : 60,
    frame: Math.floor(time / 16)
  }

  const shader = shaderPrograms[effect]
  if (!shader) return

  const width = gl.canvas.width
  const height = gl.canvas.height

  if (shader.type === 'single') {
    gl.useProgram(shader.program)
    if (shader.uniforms.iChannel0 !== null && shader.uniforms.iChannel0 !== undefined) {
      bindChannel(gl, shader.uniforms, 'iChannel0', noiseTexture, 0)
    }
    if (shader.uniforms.iChannel1 !== null && shader.uniforms.iChannel1 !== undefined) {
      bindChannel(gl, shader.uniforms, 'iChannel1', noiseTexture, 1)
    }
    if (shader.uniforms.iChannel2 !== null && shader.uniforms.iChannel2 !== undefined) {
      bindChannel(gl, shader.uniforms, 'iChannel2', noiseTexture, 2)
    }
    if (shader.uniforms.iChannel3 !== null && shader.uniforms.iChannel3 !== undefined) {
      bindChannel(gl, shader.uniforms, 'iChannel3', noiseTexture, 3)
    }
    drawQuad(gl, shader.uniforms, width, height, time, extra)
  } else {
    if (!fbos.buffera.ping) resizeFBOs(gl, fbos, width, height)
    
    let finalOutput = null
    console.log(`${effect}:`, Object.entries(shader.passes).map(([k, v]) => `${k}:${JSON.stringify(v.channels)}`).join(', '))
    for (const bufferName of BUFFER_ORDER) {
      if (shader.passes[bufferName]) {
        finalOutput = renderBufferPass(gl, shader, bufferName, fbos, noiseTexture, width, height, time, extra)
      }
    }
    console.log('finalOutput:', finalOutput ? 'texture set' : 'null')

    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.viewport(0, 0, width, height)
    
    if (shader.passes.image) {
      const imageChannels = shader.passes.image.channels || {}
      
      gl.useProgram(shader.passes.image.program)
      
      const defaultImageChannels = {}
      const mergedImageChannels = { ...defaultImageChannels, ...imageChannels }
      
      for (const [channelName, source] of Object.entries(mergedImageChannels)) {
        if (!channelName.startsWith('iChannel')) continue
        const unit = parseInt(channelName.replace('iChannel', ''))
        
        let texture = null
        let textureSource = 'none'
        if (source === 'noise') {
          texture = noiseTexture
          textureSource = 'noise'
        } else if (source === 'final' || !source) {
          texture = finalOutput || noiseTexture
          textureSource = 'finalOutput'
        } else if (source === 'self') {
          texture = finalOutput || noiseTexture
          textureSource = 'self'
        } else {
          texture = getBufferTexture(fbos, source) || noiseTexture
          textureSource = source
        }
        
        const loc = shader.passes.image.uniforms[channelName]
        if (texture && loc !== null && loc !== undefined) {
          bindChannel(gl, shader.passes.image.uniforms, channelName, texture, unit)
        }
        console.log(`image.${channelName} -> ${textureSource} (texture: ${texture ? 'set' : 'null'})`)
      }
      
      for (let i = 0; i < 4; i++) {
        const channelName = `iChannel${i}`
        if (!mergedImageChannels[channelName] && shader.passes.image.uniforms[channelName] !== null && shader.passes.image.uniforms[channelName] !== undefined) {
          bindChannel(gl, shader.passes.image.uniforms, channelName, i === 0 ? (finalOutput || noiseTexture) : noiseTexture, i)
        }
      }
      
      drawQuad(gl, shader.passes.image.uniforms, width, height, time, extra)
    }
  }
}

export function renderTrail(webgl, joints, prevJoints) {
  const { trailCtx } = webgl
  if (!trailCtx || !joints || !prevJoints) return
  
  trailCtx.lineWidth = 2
  
  joints.forEach((joint, index) => {
    if (joint.enabled && prevJoints[index]) {
      const color = parseColor(joint.color)
      trailCtx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a / 255})`
      trailCtx.beginPath()
      trailCtx.moveTo(prevJoints[index].endX, prevJoints[index].endY)
      trailCtx.lineTo(joint.endX, joint.endY)
      trailCtx.stroke()
    }
  })
}

export function resizeCanvas(canvas, gl = null) {
  const dpr = window.devicePixelRatio || 1
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  if (gl) gl.viewport(0, 0, canvas.width, canvas.height)
}

export function resizeTrailCanvas(trailCanvas) {
  const dpr = window.devicePixelRatio || 1
  trailCanvas.width = window.innerWidth * dpr
  trailCanvas.height = window.innerHeight * dpr
}

export function clearTrail(trailCanvas) {
  const ctx = trailCanvas.getContext('2d')
  ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height)
}

export function renderJoints(ctx, joints) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  joints.forEach((joint) => {
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = JOINTS_WIDTH
    ctx.beginPath()
    ctx.moveTo(joint.startX, joint.startY)
    ctx.lineTo(joint.endX, joint.endY)
    ctx.stroke()

    ctx.fillStyle = '#ff0000'
    ctx.beginPath()
    ctx.arc(joint.endX, joint.endY, JOINT_END_SIZE / 2, 0, Math.PI * 2)
    ctx.fill()
  })
}
