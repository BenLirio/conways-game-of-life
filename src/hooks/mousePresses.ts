import p5 from 'p5'
import { getToolSelector } from '../state/elements'
import { setMouseDown, setPanning } from '../state/globals'
import { cellMap, mouseCell } from '../state/state'
import { Tool } from '../types/types'
import { getSelectedShape, offsetCell } from '../util/shapeUtils'

const placeShape = (p: p5) => {
  console.log('place shape')
  const cells = getSelectedShape().map(offsetCell(mouseCell))
  if (p.mouseX >= 0 && p.mouseY >= 0 && p.mouseX < p.width && p.mouseY < p.height) {
    cells
      .forEach(({x,y}) => cellMap.set(`${x},${y}`, true))

  }
}

const beginPan = (p: p5) => {
  setMouseDown({
    x: p.mouseX,
    y: p.mouseY
  })
  setPanning(true)
}

export const mousePressed = (p: p5) => {
  switch (getToolSelector().selected()) {
    case Tool.Pan:
      beginPan(p)
      break
    case Tool.PlaceShape:
      placeShape(p)
      break
    default:
      console.error('Unknown tool')
  }
}