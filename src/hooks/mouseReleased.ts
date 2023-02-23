import p5 from 'p5'
import { getToolSelector } from '../state/elements'
import { getMouseDown, setPanning, setPosOffset } from '../state/globals'
import { Tool } from '../types/types'

const endPan = (p: p5) => {
  setPanning(false)
  const {x, y} = getMouseDown()
  const dx = x - p.mouseX
  const dy = y - p.mouseY
  setPosOffset(pos => ({x: pos.x + dx, y: pos.y + dy}))
}


export const mouseReleased = (p: p5) => {
  switch (getToolSelector().selected()) {
    case Tool.Pan:
      endPan(p)
      break
    case Tool.PlaceShape:
      break
    default:
      console.error('Unknown tool')
  }
}