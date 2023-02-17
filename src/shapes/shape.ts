import { Shape } from '../types/types'

export const newShape = (str: string): Shape => 
  str.trim().split('\n').reduce((acc, row, y) => 
    row.trim().split('').reduce((acc, s, x) =>
      s === 'x' ? [...acc, {x, y}] : acc
    , acc)
  , [])