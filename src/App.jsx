import { useRef, useEffect, useCallback, useState } from 'react'
import SidePanel from './SidePanel'
import AppState from './AppState'
import { initWebGL, renderWebGL, resizeCanvas, renderJoints } from './renderer'

export default function App() {
  const [shaderEnabled, setShaderEnabled] = useState(true)
  const [jointsEnabled, setJointsEnabled] = useState(true)
  const [effect, setEffect] = useState('plasma')

  const canvasRef = useRef(null)
  const jointsCanvasRef = useRef(null)
  const webglRef = useRef(null)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(0)
  const appStateRef = useRef(new AppState())

  const init = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const webgl = initWebGL(canvas)
    if (webgl) {
      webglRef.current = webgl
    }
  }, [])

  const resize = useCallback(() => {
    const canvas = canvasRef.current
    const webgl = webglRef.current
    if (canvas && webgl) {
      resizeCanvas(canvas, webgl.gl)
    }
    const jointsCanvas = jointsCanvasRef.current
    if (jointsCanvas) {
      resizeCanvas(jointsCanvas)
    }
  }, [])

  const render = useCallback((time) => {
    const webgl = webglRef.current
    const canvas = canvasRef.current

    if (lastTimeRef.current > 0) {
      const deltaTime = time - lastTimeRef.current
      appStateRef.current.updateJoints(deltaTime)
    }
    lastTimeRef.current = time

    const joints = appStateRef.current.calculateJoints(window.innerWidth, window.innerHeight)

    if (jointsEnabled && jointsCanvasRef.current) {
      const ctx = jointsCanvasRef.current.getContext('2d')
      renderJoints(ctx, joints, window.devicePixelRatio || 1)
    }

    if (webgl && canvas) {
      renderWebGL(webgl, time, effect)
    }

    rafRef.current = requestAnimationFrame(render)
  }, [shaderEnabled, jointsEnabled, effect])

  useEffect(() => {
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

  useEffect(() => {
    if (!jointsEnabled && jointsCanvasRef.current) {
      const ctx = jointsCanvasRef.current.getContext('2d')
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
  }, [jointsEnabled])

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
      <SidePanel
        shaderEnabled={shaderEnabled}
        onToggleShader={setShaderEnabled}
        jointsEnabled={jointsEnabled}
        onToggleJoints={setJointsEnabled}
        effect={effect}
        onEffectChange={setEffect}
      />
    </>
  )
}
