import { useState } from 'react'
import styles from './SidePanel.module.css'

export default function SidePanel({ shaderEnabled, onToggleShader, jointsEnabled, onToggleJoints }) {
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
        <span className={styles.label}>Plasma Effect</span>
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
    </div>
  )
}
