import { stillLifes } from '../shapes/still_lifes'
import { getPatternSelector } from '../state/elements'
import { Cell, Shape } from '../types/types'

export const offsetShape = (shape: Shape, offset: Cell): Shape =>
  shape.map(({x,y}) => ({x: x + offset.x, y: y + offset.y}))
export const offsetCell = (offset: Cell) => (cell: Cell): Cell =>
  ({x: cell.x + offset.x, y: cell.y + offset.y})

export const getSelectedShape = (): Shape =>
  stillLifes[getPatternSelector().selected()] as Shape