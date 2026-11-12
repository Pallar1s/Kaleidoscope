import { parseColor } from './colors'

const JOINTS_WIDTH = 5
const JOINT_END_SIZE = 10

export function renderTrail(webgl, joints, prevJoints, trailWidth = 2, renderEmission = false) {
  const { trailCtx, emissionCtx } = webgl
  if (renderEmission && emissionCtx) webgl.clearEmission()
  if (!trailCtx || !joints || !prevJoints) return

  const cssToFramebuffer = trailCtx.canvas.width / Math.max(1, window.innerWidth)
  trailCtx.lineWidth = trailWidth * cssToFramebuffer
  if (renderEmission && emissionCtx) emissionCtx.lineWidth = trailCtx.lineWidth

  let changed = false
  joints.forEach((joint, index) => {
    if (joint.trailEnabled && prevJoints[index]) {
      const color = parseColor(joint.color)
      trailCtx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a / 255})`
      trailCtx.beginPath()
      trailCtx.moveTo(prevJoints[index].endX, prevJoints[index].endY)
      trailCtx.lineTo(joint.endX, joint.endY)
      trailCtx.stroke()
      if (renderEmission && emissionCtx) {
        emissionCtx.strokeStyle = trailCtx.strokeStyle
        emissionCtx.beginPath()
        emissionCtx.moveTo(prevJoints[index].endX, prevJoints[index].endY)
        emissionCtx.lineTo(joint.endX, joint.endY)
        emissionCtx.stroke()
      }
      changed = true
    }
  })
  if (changed) webgl.markTrailDirty()
  if (renderEmission && changed) webgl.markEmissionDirty()
}

export function clearTrail(trailCanvas) {
  const ctx = trailCanvas.getContext('2d')
  ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height)
}

export function renderJoints(ctx, joints) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  const cssToFramebuffer = ctx.canvas.width / Math.max(1, window.innerWidth)

  joints.forEach((joint) => {
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = JOINTS_WIDTH * cssToFramebuffer
    ctx.beginPath()
    ctx.moveTo(joint.startX, joint.startY)
    ctx.lineTo(joint.endX, joint.endY)
    ctx.stroke()

    ctx.fillStyle = '#ff0000'
    ctx.beginPath()
    ctx.arc(joint.endX, joint.endY, JOINT_END_SIZE * cssToFramebuffer / 2, 0, Math.PI * 2)
    ctx.fill()
  })
}
