import { Cell } from '../types/types'
export const CELL_SIZE = 16
export const cellMap: Map<string, boolean> = new Map()
export const mouseCell: Cell = {x: 10, y: 5}

const makeCell = ({x,y}: Cell): void => {
  cellMap.set(`${x},${y}`, true)
}
const neighbors = ({x, y}: Cell): Cell[] => {
  const neighbors: Cell[] = []
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue
      neighbors.push({x: x + i, y: y + j})
    }
  }
  return neighbors
}
export const keyToCell = (key: string): Cell => {
  const [x,y] = key.split(',').map(Number)
  return {x,y}
}

export const update = () => {
  const cells = getCells()
  const currentNeighbors = cells.map(neighbors).flat().reduce((acc, {x,y}) => {
    acc.set(`${x},${y}`, (acc.get(`${x},${y}`) || 0) + 1)
    return acc
  }, new Map())
  currentNeighbors.forEach((count, key) => {
    if (count === 3) cellMap.set(key, true)
    if (count < 2 || count > 3) cellMap.delete(key)
  })
  cells.forEach(({x,y}) => {
    if (!currentNeighbors.has(`${x},${y}`)) cellMap.delete(`${x},${y}`)
  })
}

export const getCells = (): Cell[] =>
  Array.from(cellMap.keys()).map(keyToCell)
