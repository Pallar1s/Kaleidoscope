import styles from './SidePanel.module.css'

export default function SidePanel({ shaderEnabled, onToggleShader, jointsEnabled, onToggleJoints, effect, onEffectChange }) {
  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>Settings</h2>
      
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
