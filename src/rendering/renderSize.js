const MAX_RENDER_PIXELS = 2_073_600

export function getRenderSize(gl = null, scale = 1) {
  const dpr = window.devicePixelRatio || 1
  const requestedWidth = Math.max(1, window.innerWidth * dpr * scale)
  const requestedHeight = Math.max(1, window.innerHeight * dpr * scale)
  const maxTextureSize = gl ? gl.getParameter(gl.MAX_TEXTURE_SIZE) : 8192
  const maxViewport = gl ? gl.getParameter(gl.MAX_VIEWPORT_DIMS) : [8192, 8192]
  const dimensionFactor = Math.min(
    1,
    Math.min(maxTextureSize, maxViewport[0]) / requestedWidth,
    Math.min(maxTextureSize, maxViewport[1]) / requestedHeight
  )
  const pixelFactor = Math.min(1, Math.sqrt(MAX_RENDER_PIXELS / (requestedWidth * requestedHeight)))
  const factor = Math.min(dimensionFactor, pixelFactor)
  const width = Math.max(1, Math.floor(requestedWidth * factor))
  const height = Math.max(1, Math.floor(requestedHeight * factor))
  return { width, height, requestedScale: scale, effectiveScale: scale * factor, dpr }
}

export function resizeCanvas(canvas, gl = null, size = getRenderSize(gl)) {
  canvas.width = size.width
  canvas.height = size.height
  if (gl) gl.viewport(0, 0, canvas.width, canvas.height)
  return size
}

export function resizeTrailCanvas(trailCanvas, size) {
  trailCanvas.width = size.width
  trailCanvas.height = size.height
}
