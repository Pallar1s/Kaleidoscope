import { useRef, useEffect, useCallback, useState } from 'react'
import SidePanel from './SidePanel'

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const fragmentShaderSource = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform vec2 u_jointEnd;
  uniform float u_jointAngle;
  
  #define PI 3.14159265359
  
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    vec2 mouse = (u_mouse * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    vec2 jointEnd = (u_jointEnd * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    
    float t = u_time * 0.5;
    
    float distToMouse = length(p - mouse * 0.8);
    float mouseInfluence = sin(distToMouse * 8.0 - t * 4.0) * exp(-distToMouse * 1.5) * 0.15;
    
    float distToJoint = length(p - jointEnd);
    float angleToJoint = atan(p.y - jointEnd.y, p.x - jointEnd.x);
    float vortex = sin(distToJoint * 15.0 + angleToJoint - u_jointAngle * 3.0) * exp(-distToJoint * 2.5) * 0.8;
    float jointInfluence = vortex;
    
    float plasma = 0.0;
    
    plasma += sin(p.x * 3.0 + t * 1.2) * 0.3;
    plasma += sin(p.y * 2.5 + t * 0.9) * 0.3;
    plasma += sin((p.x + p.y) * 2.8 + t * 1.1) * 0.3;
    plasma += sin(length(p) * 4.0 - t * 1.5) * 0.3;
    plasma += sin(p.x * 4.0 + sin(p.y * 3.0 + t)) * 0.15;
    plasma += sin(p.y * 4.0 + sin(p.x * 3.0 - t)) * 0.15;
    
    plasma += mouseInfluence;
    plasma += jointInfluence;
    
    float angle = atan(p.y, p.x);
    plasma += sin(angle * 6.0 + t * 2.0) * 0.1;
    plasma += sin(length(p) * 5.0 - t * 1.8 + angle) * 0.1;
    
    float radial = sin(length(p) * 8.0 - t * 2.5);
    radial += sin(p.x * 6.0 + p.y * 6.0 + t) * 0.2;
    plasma = mix(plasma, radial, 0.2);
    
    float n = noise(p * 2.0 + t * 0.3);
    plasma += (n - 0.5) * 0.2;
    
    plasma = plasma / 4.5;
    
    vec3 bgColor = vec3(0.03, 0.03, 0.08);
    
    float hue = fract(plasma * 0.3 + t * 0.1 + length(p) * 0.1);
    float sat = 0.8 + sin(t * 0.5 + length(p) * 3.0) * 0.15;
    float val = 0.6 + sin(t * 0.7 + angle * 2.0) * 0.2;
    
    val *= 1.0 - distToMouse * 0.05;
    
    float jointColorShift = exp(-distToJoint * 3.0) * 0.2;
    hue = fract(hue + jointColorShift + sin(t) * 0.1);
    
    vec3 color = hsv2rgb(vec3(hue, sat, val));
    
    float plasmaIntensity = smoothstep(-0.3, 0.5, plasma);
    color = mix(bgColor, color, plasmaIntensity);
    
    gl_FragColor = vec4(color, 1.0);
  }
`

function createShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader))
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
    gl.deleteShader(program)
    return null
  }
  return program
}

const JOINTS_WIDTH = 5
const JOINT_END_SIZE = 10

export default function App() {
  const [shaderEnabled, setShaderEnabled] = useState(true)
  const [jointsEnabled, setJointsEnabled] = useState(true)
  const canvasRef = useRef(null)
  const jointsCanvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const glRef = useRef(null)
  const programRef = useRef(null)
  const uniformsRef = useRef({})
  const rafRef = useRef(null)
  const lastTimeRef = useRef(0)
  const jointsRef = useRef([
    { lengthRatio: 50, rotation: 0, speed: 60 },
    { lengthRatio: 10, rotation: 0, speed: 120 }
  ])

  const init = useCallback(() => {
    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    glRef.current = gl

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    const program = createProgram(gl, vertexShader, fragmentShader)
    if (!program) return

    programRef.current = program

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1
    ]), gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    uniformsRef.current = {
      time: gl.getUniformLocation(program, 'u_time'),
      resolution: gl.getUniformLocation(program, 'u_resolution'),
      mouse: gl.getUniformLocation(program, 'u_mouse'),
      jointEnd: gl.getUniformLocation(program, 'u_jointEnd'),
      jointAngle: gl.getUniformLocation(program, 'u_jointAngle')
    }

    gl.useProgram(program)
  }, [])

  const resize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    const gl = glRef.current
    if (gl) gl.viewport(0, 0, canvas.width, canvas.height)

    const jointsCanvas = jointsCanvasRef.current
    if (jointsCanvas) {
      jointsCanvas.width = window.innerWidth * dpr
      jointsCanvas.height = window.innerHeight * dpr
    }
  }, [])

  const renderJoints = useCallback(() => {
    const canvas = jointsCanvasRef.current
    if (!canvas) return null

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const width = window.innerWidth
    const height = window.innerHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const joints = jointsRef.current
    const totalRatio = joints.reduce((sum, j) => sum + j.lengthRatio, 0)
    const halfMin = Math.min(width, height) / 2

    let startX = width / 2 * dpr
    let startY = height / 2 * dpr

    const centers = []
    let endX = startX
    let endY = startY

    joints.forEach((joint) => {
      const length = halfMin * (joint.lengthRatio / totalRatio)
      const angleRad = (joint.rotation * Math.PI) / 180
      endX = startX + Math.cos(angleRad) * length
      endY = startY + Math.sin(angleRad) * length

      ctx.strokeStyle = '#00ff00'
      ctx.lineWidth = JOINTS_WIDTH
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      ctx.stroke()

      const centerX = (startX + endX) / 2
      const centerY = (startY + endY) / 2
      centers.push({ x: centerX, y: centerY })

      ctx.fillStyle = '#ff0000'
      ctx.beginPath()
      ctx.arc(endX, endY, JOINT_END_SIZE / 2, 0, Math.PI * 2)
      ctx.fill()

      startX = endX
      startY = endY
    })

    return { x: endX, y: endY }
  }, [])

  const render = useCallback((time) => {
    const gl = glRef.current
    const program = programRef.current
    const uniforms = uniformsRef.current
    const canvas = canvasRef.current

    if (lastTimeRef.current > 0) {
      const deltaTime = time - lastTimeRef.current
      jointsRef.current.forEach((joint) => {
        joint.rotation += joint.speed * (deltaTime / 1000)
      })
    }
    lastTimeRef.current = time

    const jointEnd = jointsEnabled ? renderJoints() : { x: 0, y: 0 }

    const totalRotation = jointsRef.current.reduce((sum, j) => sum + j.rotation, 0)

    if (!gl || !program || !canvas) {
      rafRef.current = requestAnimationFrame(render)
      return
    }

    gl.clearColor(0, 0, 0, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)

    gl.useProgram(program)
    gl.uniform1f(uniforms.time, time * 0.001)
    gl.uniform2f(uniforms.resolution, canvas.width, canvas.height)
    gl.uniform2f(uniforms.mouse, mouseRef.current.x, mouseRef.current.y)
    gl.uniform2f(uniforms.jointEnd, jointEnd ? jointEnd.x : 0, jointEnd ? (canvas.height - jointEnd.y) : 0)
    gl.uniform1f(uniforms.jointAngle, totalRotation * Math.PI / 180)

    gl.drawArrays(gl.TRIANGLES, 0, 6)

    rafRef.current = requestAnimationFrame(render)
  }, [renderJoints])

  useEffect(() => {
    init()
    resize()

    const handleResize = () => resize()
    const handleMouseMove = (e) => {
      const dpr = window.devicePixelRatio || 1
      mouseRef.current = {
        x: e.clientX * dpr,
        y: (window.innerHeight - e.clientY) * dpr
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    rafRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [init, resize, render])

  return (
    <>
      <div style={{
        display: shaderEnabled ? 'none' : 'block',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }} />
      <canvas ref={canvasRef} style={{
        display: shaderEnabled ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }} />
      <canvas ref={jointsCanvasRef} style={{
        display: jointsEnabled ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none'
      }} />
      <SidePanel shaderEnabled={shaderEnabled} onToggleShader={setShaderEnabled} jointsEnabled={jointsEnabled} onToggleJoints={setJointsEnabled} />
    </>
  )
}
