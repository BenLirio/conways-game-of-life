import p5 from 'p5'
import { cellMap, mouseCell } from '../state/state'

export const mousePressed = (p: p5) => {
  console.log('mousePressed')
  cellMap.set(`${mouseCell.x},${mouseCell.y}`, true)
}