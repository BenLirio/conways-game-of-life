import p5 from 'p5'
import { getPosOffset, getScale } from '../state/globals'
import { CELL_SIZE, mouseCell } from '../state/state'

export const mouseMoved = (p: p5) => {
  const offset = getPosOffset()
  const x = (p.mouseX + offset.x) / (getScale()*CELL_SIZE)
  const y = (p.mouseY + offset.y) / (getScale()*CELL_SIZE)
  mouseCell.x = Math.floor(x)
  mouseCell.y = Math.floor(y)
}