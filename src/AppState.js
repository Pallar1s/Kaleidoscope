class AppState {
  constructor() {
    this.jointsEnabled = true
    this.shaderEnabled = true
    this.joints = [
      { lengthRatio: 50, rotation: 0, speed: 60 },
      { lengthRatio: 10, rotation: 0, speed: 120 }
    ]
  }

  updateJoints(deltaTime) {
    this.joints.forEach((joint) => {
      joint.rotation += joint.speed * (deltaTime / 1000)
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
