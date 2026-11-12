export function buildFrameEmitters({
  joints = [],
  previousJoints = null,
  previousEmitter = null,
  pointer = { x: 0, y: 0, pressed: false },
  deltaSeconds = 0,
  maxEmitters = Number.POSITIVE_INFINITY
}) {
  const lastJoint = joints.at(-1) || null
  const emitterSource = pointer.pressed ? 'pointer' : lastJoint ? 'joint' : null
  const emitter = pointer.pressed
    ? { x: pointer.x, y: pointer.y }
    : lastJoint
      ? { x: lastJoint.endX, y: lastJoint.endY }
      : null

  let velocityX = 0
  let velocityY = 0
  const emitterContinues = Boolean(emitter && previousEmitter?.source === emitterSource)
  if (emitterContinues && deltaSeconds > 0) {
    velocityX = (emitter.x - previousEmitter.x) / deltaSeconds
    velocityY = (emitter.y - previousEmitter.y) / deltaSeconds
  }

  const limitedJoints = joints.slice(0, maxEmitters)
  const jointEmitters = limitedJoints.map((joint, index) => {
    const previousJoint = previousJoints?.[index]
    const isPointerReplacement = pointer.pressed && index === limitedJoints.length - 1
    return {
      x: isPointerReplacement ? pointer.x : joint.endX,
      y: isPointerReplacement ? pointer.y : joint.endY,
      velocityX: isPointerReplacement
        ? velocityX
        : previousJoint && deltaSeconds > 0
          ? (joint.endX - previousJoint.endX) / deltaSeconds
          : 0,
      velocityY: isPointerReplacement
        ? velocityY
        : previousJoint && deltaSeconds > 0
          ? (joint.endY - previousJoint.endY) / deltaSeconds
          : 0,
      color: joint.color
    }
  })

  return {
    emitter,
    emitterSource,
    emitterContinues,
    velocityX,
    velocityY,
    jointEmitters
  }
}
