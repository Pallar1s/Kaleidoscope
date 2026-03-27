const JOINTS_WIDTH = 5
const JOINT_END_SIZE = 10

const VERTEX_SHADER_SOURCE = `
  attribute vec2 a_position;
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

function createShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader error:', gl.getShaderInfoLog(shader))
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

function createShaderProgram(gl, fragmentShaderSource) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE)
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
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

  return {
    program,
    uniforms: {
      time: gl.getUniformLocation(program, 'u_time'),
      resolution: gl.getUniformLocation(program, 'u_resolution')
    }
  }
}

function discoverShaders() {
  const shaders = []
  
  for (const path in shaderModules) {
    const module = shaderModules[path]
    const fileName = path.split('/').pop().replace('.js', '')
    
    const fragmentKey = Object.keys(module).find(key => key.endsWith('FragmentShader'))
    
    if (fragmentKey) {
      shaders.push({
        name: fileName,
        fragmentShader: module[fragmentKey]
      })
    }
  }
  
  return shaders
}

export const availableShaders = discoverShaders()

export function initWebGL(canvas, trailCanvas) {
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  if (!gl) {
    console.error('WebGL not supported')
    return null
  }

  const programs = {}
  
  for (const shader of availableShaders) {
    programs[shader.name] = createShaderProgram(gl, shader.fragmentShader)
    if (!programs[shader.name]) {
      console.error(`Failed to create shader program: ${shader.name}`)
    }
  }

  if (Object.keys(programs).length === 0) {
    console.error('No shader programs created')
    return null
  }

  const trailCtx = trailCanvas.getContext('2d')

  return { gl, programs, trailCtx }
}

export function renderWebGL(webgl, time, effect = 'plasma') {
  const { gl, programs } = webgl

  gl.clearColor(0, 0, 0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)
  
  const shaderData = programs[effect]
  if (!shaderData) return
  
  gl.useProgram(shaderData.program)
  gl.uniform1f(shaderData.uniforms.time, time * 0.001)
  gl.uniform2f(shaderData.uniforms.resolution, gl.canvas.width, gl.canvas.height)
  
  gl.drawArrays(gl.TRIANGLES, 0, 6)
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
  if (gl) {
    gl.viewport(0, 0, canvas.width, canvas.height)
  }
  return { dpr, width: window.innerWidth, height: window.innerHeight }
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
