import styles from './SidePanel.module.css'

export default function SidePanel({ visible, isPaused, onTogglePause, shaderEnabled, onToggleShader, jointsEnabled, onToggleJoints, trailEnabled, onToggleTrail, effect, onEffectChange, speedMultiplier, onSpeedChange, presetNames, selectedPreset, onPresetChange, shaderNames, resolutionScale, onResolutionScaleChange, trailWidth, onTrailWidthChange }) {
  if (!visible) return null

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>Settings</h2>
      
      <div className={styles.setting}>
        <span className={styles.label}>Joint preset</span>
        <select
          className={styles.select}
          value={selectedPreset}
          onChange={(e) => onPresetChange(parseInt(e.target.value))}
        >
          {presetNames.map((name, index) => (
            <option key={index} value={index}>{name}</option>
          ))}
        </select>
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Shader effect</span>
        <select
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
          onClick={onTogglePause}
          className={styles.playPauseButton}
          title={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? "▶" : "⏸"}
        </button>
      </div>
      
      <div className={styles.setting}>
        <label className={styles.toggle}>
          <input
            type="checkbox"
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
            checked={trailEnabled}
            onChange={(e) => onToggleTrail(e.target.checked)}
          />
          <span className={styles.toggleSlider}></span>
        </label>
        <span className={styles.label}>Trail</span>
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Speed: {speedMultiplier.toFixed(1)}</span>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={speedMultiplier}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
        />
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Trail Width: {trailWidth}</span>
        <input
          type="range"
          min="1"
          max="50"
          step="1"
          value={trailWidth}
          onChange={(e) => onTrailWidthChange(parseFloat(e.target.value))}
        />
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Resolution: {resolutionScale.toFixed(2)}x</span>
        <input
          type="range"
          min="0.25"
          max="4"
          step="0.25"
          value={resolutionScale}
          onChange={(e) => onResolutionScaleChange(parseFloat(e.target.value))}
        />
      </div>
    </div>
  )
}
