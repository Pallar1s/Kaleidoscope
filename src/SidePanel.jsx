import styles from './SidePanel.module.css'

export default function SidePanel({ shaderEnabled, onToggleShader, jointsEnabled, onToggleJoints, effect, onEffectChange, speedMultiplier, onSpeedChange, presetNames, selectedPreset, onPresetChange }) {
  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>Settings</h2>
      
      <div className={styles.setting}>
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
        <span className={styles.label}>Speed: {speedMultiplier.toFixed(1)}</span>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={speedMultiplier}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          className={styles.slider}
        />
      </div>

      <div className={styles.setting}>
        <select
          className={styles.select}
          value={effect}
          onChange={(e) => onEffectChange(e.target.value)}
        >
          <option value="plasma">Plasma</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="matrix">Matrix Rain</option>
        </select>
      </div>
    </div>
  )
}
