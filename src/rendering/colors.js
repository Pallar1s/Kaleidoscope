export function parseColor(color) {
  if (!color || color.length !== 9) return { r: 255, g: 255, b: 255, a: 255 }

  const alpha = parseInt(color.substring(1, 3), 16)
  const r = parseInt(color.substring(3, 5), 16)
  const g = parseInt(color.substring(5, 7), 16)
  const b = parseInt(color.substring(7, 9), 16)

  return { r, g, b, a: alpha }
}
