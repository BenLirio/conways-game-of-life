import p5 from 'p5'
import { cellMap, mouseCell } from '../state/state'
import { getSelectedShape, offsetCell } from '../util/shapeUtils'

export const mousePressed = (p: p5) => {
  getSelectedShape()
    .map(offsetCell(mouseCell))
    .forEach(({x,y}) => cellMap.set(`${x},${y}`, true))
}