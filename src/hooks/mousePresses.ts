import p5 from 'p5'
import { cellMap, mouseCell } from '../state/state'
import { getSelectedShape, inBounds, offsetCell } from '../util/shapeUtils'

export const mousePressed = (p: p5) => {
  const cells = getSelectedShape().map(offsetCell(mouseCell))
  if (cells.every(inBounds)) {
    cells
      .forEach(({x,y}) => cellMap.set(`${x},${y}`, true))
  }
}