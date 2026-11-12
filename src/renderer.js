export { availableShaders, shaderUsesChannelSource } from './rendering/shaderCatalog'
export { clearTrail, renderJoints, renderTrail } from './rendering/canvasRenderer'
export { getRenderSize, resizeCanvas, resizeTrailCanvas } from './rendering/renderSize'
export {
  disposeWebGL,
  initWebGL,
  MAX_JOINT_EMITTERS,
  renderWebGL,
  resetWebGLEffect,
  resizeWebGL
} from './rendering/webglRenderer'
