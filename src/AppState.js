import presets from '../presets/presets.json'
import { Matrix3x2 } from './Matrix3x2'

class AppState {
  constructor() {
    this.jointsEnabled = true
    this.shaderEnabled = true
    this.presets = presets
    this.joints = []
    this.currentPresetIndex = -1
  }

  loadPreset(index) {
    if (index < 0 || index >= this.presets.length) return
    
    const preset = this.presets[index]
    const totalSize = preset.Joints.reduce((sum, j) => sum + j.Size, 0)
    
    this.joints = preset.Joints.map((j) => ({
      lengthRatio: j.Size / totalSize,
      rotation: 0,
      speed: j.Speed,
      enabled: j.Enabled,
      color: j.JointColor
    }))
    
    this.currentPresetIndex = index
  }

  getPresetNames() {
    return this.presets.map(p => p.Name)
  }

  updateJoints(deltaTime, speedMultiplier = 1) {
    this.joints.forEach((joint) => {
      joint.rotation += joint.speed * (deltaTime / 100000) * speedMultiplier
      joint.rotation = joint.rotation % 360
    })
  }

  getTotalRotation() {
    return this.joints.reduce((sum, j) => sum + j.rotation, 0) % 360
  }

  calculateJoints(screenWidth, screenHeight) {
    const totalRatio = this.joints.reduce((sum, j) => sum + j.lengthRatio * 100, 0)
    const halfMin = Math.min(screenWidth, screenHeight) / 2
    const dpr = window.devicePixelRatio || 1

    const centerX = screenWidth / 2 * dpr
    const centerY = screenHeight / 2 * dpr

    let currentTransform = Matrix3x2.createTranslation(centerX, centerY)
    let prevPosition = { x: centerX, y: centerY }
    const result = []

    this.joints.forEach((joint) => {
      const radians = (joint.rotation * Math.PI) / 180
      const size = halfMin * (100 * joint.lengthRatio / totalRatio)

      const rotation = Matrix3x2.createRotation(radians)
      const translation = Matrix3x2.createTranslation(0, size)
      currentTransform = translation.multiply(rotation).multiply(currentTransform)

      const pos = currentTransform.getTranslation()

      result.push({
        startX: prevPosition.x,
        startY: prevPosition.y,
        endX: pos.x,
        endY: pos.y,
        length: size,
        angleRad: radians,
        enabled: joint.enabled,
        color: joint.color
      })

      prevPosition = pos
    })

    return result
  }
}

export default AppState
