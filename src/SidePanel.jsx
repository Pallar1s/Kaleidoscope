import styles from './SidePanel.module.css'

export default function SidePanel({ visible, isPaused, onTogglePause, shaderEnabled, onToggleShader, jointsEnabled, onToggleJoints, trailEnabled, onToggleTrail, effect, onEffectChange, speedMultiplier, onSpeedChange, presetNames, selectedPreset, onPresetChange, shaderNames, resolutionScale, effectiveResolutionScale, onResolutionScaleChange, trailWidth, onTrailWidthChange }) {
  if (!visible) return null

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>Settings</h2>
      
      <div className={`${styles.setting} ${styles.dropdown}`}>
        <label className={styles.label} htmlFor="joint-preset">Joint preset</label>
        <select
          id="joint-preset"
          className={styles.select}
          value={selectedPreset}
          onChange={(e) => onPresetChange(Number.parseInt(e.target.value, 10))}
        >
          {presetNames.map((name, index) => (
            <option key={index} value={index}>{name}</option>
          ))}
        </select>
      </div>

      <div className={`${styles.setting} ${styles.dropdown}`}>
        <label className={styles.label} htmlFor="shader-effect">Shader effect</label>
        <select
          id="shader-effect"
          className={styles.select}
          value={effect}
          onChange={(e) => onEffectChange(e.target.value)}
        >
          {shaderNames.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>

      <div className={styles.setting}>
        <button
          type="button"
          onClick={onTogglePause}
          className={`${styles.playPauseButton} ${isPaused ? styles.pulsing : ''}`}
          title={isPaused ? "Play" : "Pause"}
          aria-label={isPaused ? "Play animation" : "Pause animation"}
        >
          {isPaused ? "▶" : "⏸"}
        </button>
      </div>

      <div className={styles.setting}>
        <label className={styles.label} htmlFor="speed">Speed: {speedMultiplier.toFixed(1)}</label>
        <input
          id="speed"
            className={styles.slider}
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={speedMultiplier}
          disabled={isPaused}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
        />
      </div>

      <div className={styles.setting}>
        <label className={styles.toggle}>
          <input
            type="checkbox"
              aria-label="Enable shader effect"
            checked={shaderEnabled}
            onChange={(e) => onToggleShader(e.target.checked)}
          />
          <span className={styles.toggleSlider}></span>
        </label>
        <span className={styles.label}>Shader Effect</span>
      </div>

      <div className={styles.setting}>
        <label className={styles.toggle}>
          <input
            type="checkbox"
              aria-label="Joints"
            checked={jointsEnabled}
            onChange={(e) => onToggleJoints(e.target.checked)}
          />
          <span className={styles.toggleSlider}></span>
        </label>
        <span className={styles.label}>Joints</span>
      </div>

      <div className={styles.setting}>
        <label className={styles.toggle}>
          <input
            type="checkbox"
              aria-label="Trail"
            checked={trailEnabled}
            onChange={(e) => onToggleTrail(e.target.checked)}
          />
          <span className={styles.toggleSlider}></span>
        </label>
        <span className={styles.label}>Trail</span>
      </div>

      <div className={styles.setting}>
        <label className={styles.label} htmlFor="trail-width">Trail Width: {trailWidth}</label>
        <input
          id="trail-width"
          className={styles.slider}
          type="range"
          min="1"
          max="50"
          step="1"
          value={trailWidth}
          onChange={(e) => onTrailWidthChange(parseFloat(e.target.value))}
        />
      </div>

      <div className={styles.setting}>
        <label className={styles.label} htmlFor="resolution-scale">
          Resolution: {resolutionScale.toFixed(2)}x
          {Math.abs(resolutionScale - effectiveResolutionScale) > 0.01
            ? ` (capped at ${effectiveResolutionScale.toFixed(2)}x)`
            : ''}
        </label>
        <input
          id="resolution-scale"
          className={styles.slider}
          type="range"
          min="0.25"
          max="2"
          step="0.25"
          value={resolutionScale}
          onChange={(e) => onResolutionScaleChange(parseFloat(e.target.value))}
        />
      </div>
    </div>
  )
}
