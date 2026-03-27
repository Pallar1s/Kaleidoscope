import { vertexShaderSource, plasmaFragmentShader } from './shaders/plasma'
import { fireFragmentShader } from './shaders/fire'
import { waterFragmentShader } from './shaders/water'
import { matrixFragmentShader } from './shaders/matrix'

const JOINTS_WIDTH = 5
const JOINT_END_SIZE = 10

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
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
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

export function initWebGL(canvas) {
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  if (!gl) {
    console.error('WebGL not supported')
    return null
  }

  const programs = {
    plasma: createShaderProgram(gl, plasmaFragmentShader),
    fire: createShaderProgram(gl, fireFragmentShader),
    water: createShaderProgram(gl, waterFragmentShader),
    matrix: createShaderProgram(gl, matrixFragmentShader)
  }

  if (!programs.plasma || !programs.fire || !programs.water || !programs.matrix) {
    console.error('Failed to create shader programs')
    return null
  }

  return { gl, programs }
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

export function resizeCanvas(canvas, gl = null) {
  const dpr = window.devicePixelRatio || 1
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  if (gl) {
    gl.viewport(0, 0, canvas.width, canvas.height)
  }
  return { dpr, width: window.innerWidth, height: window.innerHeight }
}

export function renderJoints(ctx, joints, dpr) {
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
