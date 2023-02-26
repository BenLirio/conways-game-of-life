import p5 from 'p5'

export const mouseInBounds = (p: p5) => {
  return p.mouseX >= 0 &&
    p.mouseY >= 0 &&
    p.mouseX < p.width &&
    p.mouseY < p.height
}