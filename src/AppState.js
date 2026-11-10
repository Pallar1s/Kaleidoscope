import presets from '../presets/presets.json' with { type: 'json' }
import { Matrix3x2 } from './Matrix3x2.js'

class AppState {
  constructor() {
    this.presets = presets
    this.joints = []
    this.currentPresetIndex = -1
  }

  loadPreset(index) {
    if (index < 0 || index >= this.presets.length) return
    
    const preset = this.presets[index]
    if (!Array.isArray(preset.Joints) || preset.Joints.length === 0) {
      throw new Error(`Preset "${preset.Name}" must contain at least one joint`)
    }
    preset.Joints.forEach((joint, jointIndex) => {
      if (!Number.isFinite(joint.Size) || joint.Size <= 0 || !Number.isFinite(joint.Speed) || typeof joint.Enabled !== 'boolean') {
        throw new Error(`Preset "${preset.Name}" has invalid joint data at index ${jointIndex}`)
      }
      if (!/^#[0-9a-f]{8}$/i.test(joint.JointColor)) {
        throw new Error(`Preset "${preset.Name}" has an invalid color at index ${jointIndex}`)
      }
    })
    const totalSize = preset.Joints.reduce((sum, j) => sum + j.Size, 0)
    if (!Number.isFinite(totalSize) || totalSize <= 0) {
      throw new Error(`Preset "${preset.Name}" has an invalid total joint size`)
    }
    
    this.joints = preset.Joints.map((j) => ({
      lengthRatio: j.Size / totalSize,
      rotation: 0,
      // Preset values historically used hundredths of a degree per second.
      speedDegreesPerSecond: j.Speed / 100,
      trailEnabled: j.Enabled,
      color: j.JointColor
    }))
    
    this.currentPresetIndex = index
  }

  getPresetNames() {
    return this.presets.map(p => p.Name)
  }

  updateJoints(deltaSeconds, speedMultiplier = 1) {
    this.joints.forEach((joint) => {
      joint.rotation += joint.speedDegreesPerSecond * deltaSeconds * speedMultiplier
      joint.rotation = ((joint.rotation % 360) + 360) % 360
    })
  }

  calculateJoints(framebufferWidth, framebufferHeight) {
    const totalRatio = this.joints.reduce((sum, j) => sum + j.lengthRatio, 0)
    if (totalRatio <= 0 || framebufferWidth <= 0 || framebufferHeight <= 0) return []

    const halfMin = Math.min(framebufferWidth, framebufferHeight) / 2
    const centerX = framebufferWidth / 2
    const centerY = framebufferHeight / 2

    let currentTransform = Matrix3x2.createTranslation(centerX, centerY)
    let prevPosition = { x: centerX, y: centerY }
    const result = []

    this.joints.forEach((joint) => {
      const radians = (joint.rotation * Math.PI) / 180
      const size = halfMin * (joint.lengthRatio / totalRatio)

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
        trailEnabled: joint.trailEnabled,
        color: joint.color
      })

      prevPosition = pos
    })

    return result
  }
}

export default AppState
