import p5 from 'p5'
import { CELL_SIZE, mouseCell } from '../state/state'

export const mouseMoved = (p: p5) => {
  const x = (p.mouseX) / CELL_SIZE
  const y = (p.mouseY) / CELL_SIZE
  mouseCell.x = Math.floor(x)
  mouseCell.y = Math.floor(y)
}