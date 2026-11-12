import { useRef, useEffect, useCallback, useState } from 'react'
import SidePanel from './SidePanel'
import AppState from './AppState'
import {
  availableShaders,
  clearTrail as clearTrailCanvas,
  disposeWebGL,
  getRenderSize,
  initWebGL,
  MAX_JOINT_EMITTERS,
  renderJoints,
  renderTrail,
  renderWebGL,
  resetWebGLEffect,
  resizeCanvas,
  resizeTrailCanvas,
  resizeWebGL,
  shaderUsesChannelSource
} from './renderer'

const MAX_DELTA_SECONDS = 0.05
const FPS_UPDATE_INTERVAL_SECONDS = 0.5

export default function App() {
  const [fps, setFps] = useState(0)
  const [sidePanelVisible, setSidePanelVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [shaderEnabled, setShaderEnabled] = useState(true)
  const [jointsEnabled, setJointsEnabled] = useState(true)
  const [trailOverlayVisible, setTrailOverlayVisible] = useState(true)
  const [trailEmissionEnabled, setTrailEmissionEnabled] = useState(true)
  const [effect, setEffect] = useState(availableShaders[0]?.name || '')
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [jointEmissionStrength, setJointEmissionStrength] = useState(0.75)
  const [selectedPreset, setSelectedPreset] = useState(0)
  const [resolutionScale, setResolutionScale] = useState(1)
  const [effectiveResolutionScale, setEffectiveResolutionScale] = useState(1)
  const [trailWidth, setTrailWidth] = useState(10)
  const [rendererError, setRendererError] = useState('')

  const canvasRef = useRef(null)
  const trailCanvasRef = useRef(null)
  const jointsCanvasRef = useRef(null)
  const webglRef = useRef(null)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(0)
  const appTimeRef = useRef(0)
  const fpsStatsRef = useRef({ elapsed: 0, frames: 0 })
  const prevJointsRef = useRef(null)
  const prevSimulatedEmitterRef = useRef(null)
  const appStateRef = useRef(new AppState())
  const needsRenderRef = useRef(true)
  const failedEffectRef = useRef(null)
  const documentHiddenRef = useRef(document.hidden)
  const contextLostRef = useRef(false)

  const speedMultiplierRef = useRef(speedMultiplier)
  const jointEmissionStrengthRef = useRef(jointEmissionStrength)
  const shaderEnabledRef = useRef(shaderEnabled)
  const jointsEnabledRef = useRef(jointsEnabled)
  const trailOverlayVisibleRef = useRef(trailOverlayVisible)
  const trailEmissionEnabledRef = useRef(trailEmissionEnabled)
  const effectRef = useRef(effect)
  const resolutionScaleRef = useRef(resolutionScale)
  const trailWidthRef = useRef(trailWidth)
  const isPausedRef = useRef(isPaused)
  const mouseRef = useRef({ x: 0, y: 0, pressed: false })

  useEffect(() => { speedMultiplierRef.current = speedMultiplier }, [speedMultiplier])
  useEffect(() => { jointEmissionStrengthRef.current = jointEmissionStrength }, [jointEmissionStrength])
  useEffect(() => { shaderEnabledRef.current = shaderEnabled }, [shaderEnabled])
  useEffect(() => { jointsEnabledRef.current = jointsEnabled }, [jointsEnabled])
  useEffect(() => { trailOverlayVisibleRef.current = trailOverlayVisible }, [trailOverlayVisible])
  useEffect(() => { trailEmissionEnabledRef.current = trailEmissionEnabled }, [trailEmissionEnabled])
  useEffect(() => { effectRef.current = effect }, [effect])
  useEffect(() => { resolutionScaleRef.current = resolutionScale }, [resolutionScale])
  useEffect(() => { trailWidthRef.current = trailWidth }, [trailWidth])
  useEffect(() => { isPausedRef.current = isPaused }, [isPaused])

  const clearTrail = useCallback(() => {
    if (trailCanvasRef.current) clearTrailCanvas(trailCanvasRef.current)
    webglRef.current?.markTrailDirty()
    webglRef.current?.clearEmission()
  }, [])

  const resetTemporalState = useCallback((resetShader = false) => {
    prevJointsRef.current = null
    prevSimulatedEmitterRef.current = null
    clearTrail()
    if (resetShader && webglRef.current) resetWebGLEffect(webglRef.current, effectRef.current)
    needsRenderRef.current = true
  }, [clearTrail])

  const init = useCallback(() => {
    const canvas = canvasRef.current
    const trailCanvas = trailCanvasRef.current
    if (!canvas || !trailCanvas) return null

    const webgl = initWebGL(canvas, trailCanvas)
    webglRef.current = webgl
    contextLostRef.current = false
    setRendererError(webgl ? '' : 'WebGL 2 is not supported by this browser or GPU.')
    return webgl
  }, [])

  const resize = useCallback(() => {
    const canvas = canvasRef.current
    const trailCanvas = trailCanvasRef.current
    const jointsCanvas = jointsCanvasRef.current
    if (!canvas || !trailCanvas || !jointsCanvas) return

    const webgl = webglRef.current
    const size = getRenderSize(webgl?.gl || null, resolutionScaleRef.current)
    resizeCanvas(canvas, webgl?.gl || null, size)
    resizeTrailCanvas(trailCanvas, size)
    resizeCanvas(jointsCanvas, null, size)
    if (webgl) resizeWebGL(webgl)
    mouseRef.current.pressed = false

    setEffectiveResolutionScale(current => (
      Math.abs(current - size.effectiveScale) > 0.001 ? size.effectiveScale : current
    ))
    resetTemporalState(false)
  }, [resetTemporalState])

  const handlePresetChange = useCallback((index) => {
    appStateRef.current.loadPreset(index)
    setSelectedPreset(index)
    resetTemporalState(true)
  }, [resetTemporalState])

  const handleEffectChange = useCallback((nextEffect) => {
    effectRef.current = nextEffect
    setEffect(nextEffect)
    resetTemporalState(false)
  }, [resetTemporalState])

  const handlePauseToggle = useCallback(() => {
    setIsPaused(current => {
      const next = !current
      isPausedRef.current = next
      lastTimeRef.current = 0
      needsRenderRef.current = true
      return next
    })
  }, [])

  const handleTrailOverlayToggle = useCallback((visible) => {
    trailOverlayVisibleRef.current = visible
    setTrailOverlayVisible(visible)
  }, [])

  const handleTrailEmissionToggle = useCallback((enabled) => {
    trailEmissionEnabledRef.current = enabled
    setTrailEmissionEnabled(enabled)
    if (!enabled) webglRef.current?.clearEmission()
    needsRenderRef.current = true
  }, [])

  const handleClearTrail = useCallback(() => {
    clearTrail()
    needsRenderRef.current = true
  }, [clearTrail])

  const render = useCallback((time) => {
    const webgl = webglRef.current
    const canvas = canvasRef.current
    const trailCanvas = trailCanvasRef.current
    const jointsCanvas = jointsCanvasRef.current

    let rawDeltaSeconds = 0
    if (lastTimeRef.current > 0) rawDeltaSeconds = Math.max(0, (time - lastTimeRef.current) / 1000)
    lastTimeRef.current = time

    const isRunning = !isPausedRef.current && !documentHiddenRef.current
    const deltaSeconds = isRunning ? Math.min(rawDeltaSeconds, MAX_DELTA_SECONDS) : 0
    if (isRunning && deltaSeconds > 0) {
      appTimeRef.current += deltaSeconds
      appStateRef.current.updateJoints(deltaSeconds, speedMultiplierRef.current)

      const stats = fpsStatsRef.current
      stats.elapsed += rawDeltaSeconds
      stats.frames += 1
      if (stats.elapsed >= FPS_UPDATE_INTERVAL_SECONDS) {
        setFps(Math.round(stats.frames / stats.elapsed))
        fpsStatsRef.current = { elapsed: 0, frames: 0 }
      }
    }

    const shouldDraw = !documentHiddenRef.current && (isRunning || needsRenderRef.current)
    if (shouldDraw && canvas && trailCanvas && jointsCanvas) {
      const joints = appStateRef.current.calculateJoints(canvas.width, canvas.height)

      const emissionIsConsumed = shaderUsesChannelSource(effectRef.current, 'emission')
      const trailIsConsumed = trailOverlayVisibleRef.current
        || shaderUsesChannelSource(effectRef.current, 'trail')
        || emissionIsConsumed
      if (isRunning && trailEmissionEnabledRef.current && trailIsConsumed && webgl) {
        renderTrail(webgl, joints, prevJointsRef.current, trailWidthRef.current, emissionIsConsumed)
      }

      const lastJoint = joints.at(-1) || null
      const mouse = mouseRef.current
      const emitterSource = mouse.pressed ? 'pointer' : lastJoint ? 'joint' : null
      const emitter = mouse.pressed
        ? { x: mouse.x, y: mouse.y }
        : lastJoint
          ? { x: lastJoint.endX, y: lastJoint.endY }
          : null

      let velocityX = 0
      let velocityY = 0
      const previousEmitter = prevSimulatedEmitterRef.current
      const emitterContinues = Boolean(emitter && previousEmitter?.source === emitterSource)
      if (emitterContinues && deltaSeconds > 0) {
        velocityX = (emitter.x - previousEmitter.x) / deltaSeconds
        velocityY = (emitter.y - previousEmitter.y) / deltaSeconds
      }

      const jointEmitters = joints.slice(0, MAX_JOINT_EMITTERS).map((joint, index) => {
        const previousJoint = prevJointsRef.current?.[index]
        const isPointerReplacement = mouse.pressed && index === Math.min(joints.length, MAX_JOINT_EMITTERS) - 1
        return {
          x: isPointerReplacement ? mouse.x : joint.endX,
          y: isPointerReplacement ? mouse.y : joint.endY,
          velocityX: isPointerReplacement
            ? velocityX
            : previousJoint && deltaSeconds > 0
              ? (joint.endX - previousJoint.endX) / deltaSeconds
              : 0,
          velocityY: isPointerReplacement
            ? velocityY
            : previousJoint && deltaSeconds > 0
              ? (joint.endY - previousJoint.endY) / deltaSeconds
              : 0,
          color: joint.color
        }
      })

      if (webgl && shaderEnabledRef.current && !contextLostRef.current && !webgl.gl.isContextLost()) {
        const rendered = renderWebGL(
          webgl,
          appTimeRef.current * 1000,
          effectRef.current,
          emitter?.x,
          emitter?.y,
          velocityX,
          velocityY,
          deltaSeconds,
          mouse.pressed && emitterContinues ? 2 : 0,
          isRunning,
          jointEmitters,
          jointEmissionStrengthRef.current
        )
        canvas.dataset.shaderFrame = String(webgl.frameCounters.get(effectRef.current) || 0)
        canvas.dataset.activeEffect = effectRef.current
        if (rendered && isRunning) {
          prevSimulatedEmitterRef.current = emitter
            ? { ...emitter, source: emitterSource }
            : null
        }
        if (!rendered && failedEffectRef.current !== effectRef.current) {
          failedEffectRef.current = effectRef.current
          setRendererError(`Effect "${effectRef.current}" is unavailable on this GPU.`)
        } else if (rendered && failedEffectRef.current) {
          failedEffectRef.current = null
          setRendererError('')
        }
      }

      const jointsContext = jointsCanvas.getContext('2d')
      if (jointsEnabledRef.current) renderJoints(jointsContext, joints)
      else jointsContext.clearRect(0, 0, jointsCanvas.width, jointsCanvas.height)

      prevJointsRef.current = joints
      needsRenderRef.current = false
    }

    rafRef.current = requestAnimationFrame(render)
  }, [])

  useEffect(() => {
    appStateRef.current.loadPreset(0)
    init()
    resize()

    const canvas = canvasRef.current
    let resizeRaf = null
    const handleResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = null
        resize()
      })
    }
    const handleVisibilityChange = () => {
      documentHiddenRef.current = document.hidden
      lastTimeRef.current = 0
      if (!document.hidden) needsRenderRef.current = true
    }
    const handleContextLost = (event) => {
      event.preventDefault()
      contextLostRef.current = true
      setRendererError('WebGL context was lost. Waiting for recovery…')
    }
    const handleContextRestored = () => {
      contextLostRef.current = false
      webglRef.current = null
      init()
      resize()
      needsRenderRef.current = true
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    canvas?.addEventListener('webglcontextlost', handleContextLost)
    canvas?.addEventListener('webglcontextrestored', handleContextRestored)
    rafRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      canvas?.removeEventListener('webglcontextlost', handleContextLost)
      canvas?.removeEventListener('webglcontextrestored', handleContextRestored)
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      disposeWebGL(webglRef.current)
      webglRef.current = null
    }
  }, [init, render, resize])

  useEffect(() => {
    if (!webglRef.current) return undefined
    const resizeRaf = requestAnimationFrame(resize)
    return () => cancelAnimationFrame(resizeRaf)
  }, [resolutionScale, resize])

  const updatePointer = useCallback((event, pressed = mouseRef.current.pressed) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height),
      pressed
    }
    if (isPausedRef.current) {
      prevSimulatedEmitterRef.current = null
      needsRenderRef.current = true
    }
  }, [])

  return (
    <>
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }} />

      <canvas
        ref={canvasRef}
        aria-label="Interactive pixel shader"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId)
          updatePointer(event, true)
        }}
        onPointerMove={(event) => updatePointer(event)}
        onPointerUp={(event) => updatePointer(event, false)}
        onPointerCancel={() => { mouseRef.current.pressed = false }}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          opacity: shaderEnabled ? 1 : 0,
          touchAction: 'none',
          zIndex: 1
        }}
      />
      <canvas ref={trailCanvasRef} data-layer="trail" style={{
        display: trailOverlayVisible ? 'block' : 'none',
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 2
      }} />
      <canvas ref={jointsCanvasRef} style={{
        display: jointsEnabled ? 'block' : 'none',
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 3
      }} />

      <div style={{
        position: 'fixed',
        top: 10,
        left: 10,
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 14,
        background: 'rgba(0,0,0,0.5)',
        padding: '4px 8px',
        borderRadius: 4,
        zIndex: 1000
      }}>
        {isPaused ? 'Paused' : `${fps} FPS`}
      </div>

      {rendererError && (
        <div role="alert" style={{
          position: 'fixed',
          left: '50%',
          bottom: 20,
          transform: 'translateX(-50%)',
          color: '#fff',
          background: 'rgba(140, 20, 20, 0.9)',
          padding: '8px 12px',
          borderRadius: 6,
          zIndex: 1002
        }}>
          {rendererError}
        </div>
      )}

      <SidePanel
        visible={sidePanelVisible}
        isPaused={isPaused}
        onTogglePause={handlePauseToggle}
        shaderEnabled={shaderEnabled}
        onToggleShader={(enabled) => {
          shaderEnabledRef.current = enabled
          setShaderEnabled(enabled)
          needsRenderRef.current = true
        }}
        jointsEnabled={jointsEnabled}
        onToggleJoints={(enabled) => {
          jointsEnabledRef.current = enabled
          setJointsEnabled(enabled)
          needsRenderRef.current = true
        }}
        trailOverlayVisible={trailOverlayVisible}
        onToggleTrailOverlay={handleTrailOverlayToggle}
        trailEmissionEnabled={trailEmissionEnabled}
        onToggleTrailEmission={handleTrailEmissionToggle}
        onClearTrail={handleClearTrail}
        effect={effect}
        onEffectChange={handleEffectChange}
        speedMultiplier={speedMultiplier}
        onSpeedChange={(value) => {
          speedMultiplierRef.current = value
          setSpeedMultiplier(value)
        }}
        jointEmissionStrength={jointEmissionStrength}
        onJointEmissionStrengthChange={(value) => {
          jointEmissionStrengthRef.current = value
          setJointEmissionStrength(value)
          needsRenderRef.current = true
        }}
        presetNames={appStateRef.current.getPresetNames()}
        selectedPreset={selectedPreset}
        onPresetChange={handlePresetChange}
        shaderNames={availableShaders.map(shader => shader.name)}
        resolutionScale={resolutionScale}
        effectiveResolutionScale={effectiveResolutionScale}
        onResolutionScaleChange={setResolutionScale}
        trailWidth={trailWidth}
        onTrailWidthChange={(value) => {
          trailWidthRef.current = value
          setTrailWidth(value)
        }}
      />

      <button
        type="button"
        onClick={() => setSidePanelVisible(visible => !visible)}
        aria-label={sidePanelVisible ? 'Close settings' : 'Open settings'}
        aria-expanded={sidePanelVisible}
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          width: 40,
          height: 40,
          background: 'rgba(0,0,0,0.5)',
          border: 'none',
          borderRadius: 4,
          color: 'white',
          fontSize: 20,
          cursor: 'pointer',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: !sidePanelVisible ? 'pulseGreen 1.5s ease-in-out infinite' : 'none'
        }}
        title="Settings"
      >
        ⚙
      </button>
    </>
  )
}
