import { useRef, useEffect, useCallback, useState } from 'react'
import SidePanel from './SidePanel'
import AppState from './AppState'
import { initWebGL, renderWebGL, renderTrail, resizeCanvas, resizeTrailCanvas, resizeFBOs, renderJoints, availableShaders } from './renderer'

const FPS_WINDOW = 30

export default function App() {
  const [fps, setFps] = useState(0)
  const fpsHistoryRef = useRef([])
  const [shaderEnabled, setShaderEnabled] = useState(true)
  const [jointsEnabled, setJointsEnabled] = useState(true)
  const [trailEnabled, setTrailEnabled] = useState(true)
  const [effect, setEffect] = useState('plasma')
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [selectedPreset, setSelectedPreset] = useState(0)
  const [resolutionScale, setResolutionScale] = useState(1.0)
  const [trailWidth, setTrailWidth] = useState(2)

  const canvasRef = useRef(null)
  const trailCanvasRef = useRef(null)
  const jointsCanvasRef = useRef(null)
  const webglRef = useRef(null)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(0)
  const deltaTimeRef = useRef(0.016)
  const prevJointsRef = useRef(null)
  const prevEmitterRef = useRef(null)
  const appStateRef = useRef(new AppState())
  const speedMultiplierRef = useRef(1)
  const shaderEnabledRef = useRef(true)
  const jointsEnabledRef = useRef(true)
  const trailEnabledRef = useRef(true)
  const effectRef = useRef('plasma')
  const resolutionScaleRef = useRef(1)
  const trailWidthRef = useRef(2)
  const isPausedRef = useRef(false)
  const mouseRef = useRef({ x: 0, y: 0, pressed: false })

  useEffect(() => {
    speedMultiplierRef.current = speedMultiplier
  }, [speedMultiplier])

  useEffect(() => {
    resolutionScaleRef.current = resolutionScale
  }, [resolutionScale])

  useEffect(() => {
    trailWidthRef.current = trailWidth
  }, [trailWidth])

  useEffect(() => {
    shaderEnabledRef.current = shaderEnabled
  }, [shaderEnabled])

  useEffect(() => {
    jointsEnabledRef.current = jointsEnabled
  }, [jointsEnabled])

  useEffect(() => {
    trailEnabledRef.current = trailEnabled
  }, [trailEnabled])

  useEffect(() => {
    effectRef.current = effect
  }, [effect])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPausedRef.current = true
      } else {
        lastTimeRef.current = 0
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const init = useCallback(() => {
    const canvas = canvasRef.current
    const trailCanvas = trailCanvasRef.current
    if (!canvas || !trailCanvas) return

    const webgl = initWebGL(canvas, trailCanvas)
    if (webgl) {
      webglRef.current = webgl
    }
  }, [])

  const resize = useCallback(() => {
    const canvas = canvasRef.current
    const webgl = webglRef.current
    if (canvas && webgl) {
      resizeCanvas(canvas, webgl.gl, resolutionScaleRef.current)
      resizeFBOs(webgl.gl, webgl.fbos, canvas.width, canvas.height)
    }
    const trailCanvas = trailCanvasRef.current
    if (trailCanvas) {
      resizeTrailCanvas(trailCanvas, resolutionScaleRef.current)
    }
    const jointsCanvas = jointsCanvasRef.current
    if (jointsCanvas) {
      resizeCanvas(jointsCanvas, null, resolutionScaleRef.current)
    }
  }, [])

  useEffect(() => {
    resize()
  }, [resolutionScale, resize])

  const clearTrail = useCallback(() => {
    const trailCanvas = trailCanvasRef.current
    if (trailCanvas) {
      const ctx = trailCanvas.getContext('2d')
      ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height)
    }
  }, [])

  const handlePresetChange = useCallback((index) => {
    appStateRef.current.loadPreset(index)
    prevJointsRef.current = null
    clearTrail()
    setSelectedPreset(index)
  }, [clearTrail])

  const render = useCallback((time) => {
    const webgl = webglRef.current
    const canvas = canvasRef.current

    if (lastTimeRef.current > 0 && !isPausedRef.current) {
      const deltaTime = time - lastTimeRef.current
      deltaTimeRef.current = deltaTime / 1000
      appStateRef.current.updateJoints(deltaTime, speedMultiplierRef.current)
      
      // FPS calculation
      const currentFps = 1000 / deltaTime
      fpsHistoryRef.current.push(currentFps)
      if (fpsHistoryRef.current.length > FPS_WINDOW) {
        fpsHistoryRef.current.shift()
      }
      const avgFps = fpsHistoryRef.current.reduce((a, b) => a + b, 0) / fpsHistoryRef.current.length
      setFps(Math.round(avgFps))
    }
    lastTimeRef.current = time
    isPausedRef.current = false

    const joints = appStateRef.current.calculateJoints(window.innerWidth, window.innerHeight)

    if (webgl && canvas && shaderEnabledRef.current) {
      const lastJoint = joints.length > 0 ? joints[joints.length - 1] : null
      let velX = 0, velY = 0
      if (lastJoint && prevEmitterRef.current) {
        velX = lastJoint.endX - prevEmitterRef.current.x
        velY = lastJoint.endY - prevEmitterRef.current.y
      }
      
      // Use mouse position if pressed, otherwise use joint position
      const mouse = mouseRef.current
      const useMouse = mouse.pressed
      const mouseX = useMouse ? mouse.x : (lastJoint ? lastJoint.endX : null)
      const mouseY = useMouse ? mouse.y : (lastJoint ? lastJoint.endY : null)
      const mouseZ = useMouse ? 2.0 : 0.0  // z > 1 means mouse is pressed (shader expects > 1)
      
      renderWebGL(
        webgl,
        time,
        effectRef.current,
        mouseX,
        mouseY,
        velX,
        velY,
        deltaTimeRef.current,
        mouseZ
      )
      if (lastJoint) {
        prevEmitterRef.current = { x: lastJoint.endX, y: lastJoint.endY }
      }
    }

    if (webgl) {
      renderTrail(webgl, joints, prevJointsRef.current, trailWidthRef.current)
    }

    if (jointsEnabledRef.current && jointsCanvasRef.current) {
      const ctx = jointsCanvasRef.current.getContext('2d')
      renderJoints(ctx, joints)
    } else if (jointsCanvasRef.current) {
      const ctx = jointsCanvasRef.current.getContext('2d')
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }

    prevJointsRef.current = joints

    rafRef.current = requestAnimationFrame(render)
  }, [])

  useEffect(() => {
    appStateRef.current.loadPreset(0)
    init()
    resize()

    const handleResize = () => resize()

    window.addEventListener('resize', handleResize)

    rafRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
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
      <div style={{
        position: 'fixed',
        top: 10,
        left: 10,
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '14px',
        background: 'rgba(0,0,0,0.5)',
        padding: '4px 8px',
        borderRadius: '4px',
        zIndex: 1000
      }}>
        {fps} FPS
      </div>
      <canvas ref={canvasRef} style={{
        display: shaderEnabled ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1
      }}
      onMouseDown={(e) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect()
        const x = (e.clientX - rect.left) * (canvas.width / rect.width)
        const y = (e.clientY - rect.top) * (canvas.height / rect.height)
        mouseRef.current = { x, y: canvas.height - y, pressed: true }
      }}
      onMouseMove={(e) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect()
        const x = (e.clientX - rect.left) * (canvas.width / rect.width)
        const y = (e.clientY - rect.top) * (canvas.height / rect.height)
        mouseRef.current = { ...mouseRef.current, x, y: canvas.height - y }
      }}
      onMouseUp={() => {
        mouseRef.current.pressed = false
      }}
      onMouseLeave={() => {
        mouseRef.current.pressed = false
      }}
      />
      <canvas ref={trailCanvasRef} style={{
        display: trailEnabled ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 2
      }} />
      <canvas ref={jointsCanvasRef} style={{
        display: jointsEnabled ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 3
      }} />
      <SidePanel
        shaderEnabled={shaderEnabled}
        onToggleShader={setShaderEnabled}
        jointsEnabled={jointsEnabled}
        onToggleJoints={setJointsEnabled}
        trailEnabled={trailEnabled}
        onToggleTrail={setTrailEnabled}
        effect={effect}
        onEffectChange={setEffect}
        speedMultiplier={speedMultiplier}
        onSpeedChange={setSpeedMultiplier}
        presetNames={appStateRef.current.getPresetNames()}
        selectedPreset={selectedPreset}
        onPresetChange={handlePresetChange}
        shaderNames={availableShaders.map(s => s.name)}
        resolutionScale={resolutionScale}
        onResolutionScaleChange={setResolutionScale}
        trailWidth={trailWidth}
        onTrailWidthChange={setTrailWidth}
      />
    </>
  )
}
