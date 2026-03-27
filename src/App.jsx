import { useRef, useEffect, useCallback, useState } from 'react'
import SidePanel from './SidePanel'
import AppState from './AppState'
import { initWebGL, renderWebGL, renderTrail, resizeCanvas, resizeTrailCanvas, resizeFBOs, renderJoints, availableShaders } from './renderer'

export default function App() {
  const [shaderEnabled, setShaderEnabled] = useState(true)
  const [jointsEnabled, setJointsEnabled] = useState(true)
  const [effect, setEffect] = useState('plasma')
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [selectedPreset, setSelectedPreset] = useState(0)

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
  const effectRef = useRef('plasma')
  const isPausedRef = useRef(false)

  useEffect(() => {
    speedMultiplierRef.current = speedMultiplier
  }, [speedMultiplier])

  useEffect(() => {
    shaderEnabledRef.current = shaderEnabled
  }, [shaderEnabled])

  useEffect(() => {
    jointsEnabledRef.current = jointsEnabled
  }, [jointsEnabled])

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
      resizeCanvas(canvas, webgl.gl)
      resizeFBOs(webgl.gl, webgl.fbos, canvas.width, canvas.height)
    }
    const trailCanvas = trailCanvasRef.current
    if (trailCanvas) {
      resizeTrailCanvas(trailCanvas)
    }
    const jointsCanvas = jointsCanvasRef.current
    if (jointsCanvas) {
      resizeCanvas(jointsCanvas)
    }
  }, [])

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
      renderWebGL(
        webgl,
        time,
        effectRef.current,
        lastJoint ? lastJoint.endX : null,
        lastJoint ? lastJoint.endY : null,
        velX,
        velY,
        deltaTimeRef.current
      )
      if (lastJoint) {
        prevEmitterRef.current = { x: lastJoint.endX, y: lastJoint.endY }
      }
    }

    if (webgl) {
      renderTrail(webgl, joints, prevJointsRef.current)
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
      <canvas ref={canvasRef} style={{
        display: shaderEnabled ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1
      }} />
      <canvas ref={trailCanvasRef} style={{
        display: (shaderEnabled || jointsEnabled) ? 'block' : 'none',
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
        effect={effect}
        onEffectChange={setEffect}
        speedMultiplier={speedMultiplier}
        onSpeedChange={setSpeedMultiplier}
        presetNames={appStateRef.current.getPresetNames()}
        selectedPreset={selectedPreset}
        onPresetChange={handlePresetChange}
        shaderNames={availableShaders.map(s => s.name)}
      />
    </>
  )
}
