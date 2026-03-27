import presets from '../presets/presets.json'

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
      lengthRatio: (j.Size / totalSize) * 100,
      rotation: 0,
      speed: j.Speed,
      enabled: j.Enabled,
      color: j.JointColor,
      showTrace: j.ShowTrace
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
    const totalRatio = this.joints.reduce((sum, j) => sum + j.lengthRatio, 0)
    const halfMin = Math.min(screenWidth, screenHeight) / 2
    const dpr = window.devicePixelRatio || 1

    let startX = screenWidth / 2 * dpr
    let startY = screenHeight / 2 * dpr
    const result = []

    this.joints.forEach((joint) => {
      const length = halfMin * (joint.lengthRatio / totalRatio)
      const angleRad = (joint.rotation * Math.PI) / 180
      const endX = startX + Math.cos(angleRad) * length
      const endY = startY + Math.sin(angleRad) * length

      result.push({
        startX,
        startY,
        endX,
        endY,
        length,
        angleRad
      })

      startX = endX
      startY = endY
    })

    return result
  }
}

export default AppState
