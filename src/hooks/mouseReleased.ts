import p5 from 'p5'
import { getMouseDown, getTool, setPanning, setPosOffset } from '../state/globals'
import { Tool } from '../types/types'
import { mouseInBounds } from '../util/bounds'

const endPan = (p: p5) => {
  setPanning(false)
  if (!mouseInBounds(p)) return
  const {x, y} = getMouseDown()
  const dx = x - p.mouseX
  const dy = y - p.mouseY
  setPosOffset(pos => ({x: pos.x + dx, y: pos.y + dy}))
}


export const mouseReleased = (p: p5) => {
  switch (getTool()) {
    case Tool.Pan:
      endPan(p)
      break
    case Tool.PlaceShape:
      break
    default:
      console.error('Unknown tool')
  }
}