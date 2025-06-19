export const xyInRang = (x: number, y: number, rect: DOMRect): boolean => {
  if (rect.left <= x && x <= rect.right && rect.top <= y && y <= rect.bottom) {
    return true
  }
  return false
}
