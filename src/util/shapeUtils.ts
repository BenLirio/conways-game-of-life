import { patterns } from '../shapes/patterns'
import { getPatternSelector } from '../state/elements'
import { getHeight, getWidth } from '../state/globals'
import { CELL_SIZE } from '../state/state'
import { IPos, Shape } from '../types/types'

export const offsetShape = (shape: Shape, offset: IPos): Shape =>
  shape.map(({x,y}) => ({x: x + offset.x, y: y + offset.y}))
export const offsetCell = (offset: IPos) => (cell: IPos): IPos =>
  ({x: cell.x + offset.x, y: cell.y + offset.y})

export const getSelectedShape = (): Shape =>
  patterns[getPatternSelector().selected()] as Shape

export const inBounds = (cell: IPos): boolean =>
  cell.x >= 0 &&
  cell.y >= 0 &&
  cell.x < getWidth()/CELL_SIZE &&
  cell.y < getHeight()/CELL_SIZE