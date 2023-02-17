import p5 from 'p5'
import { beehive, block, boat, loaf, tub } from '../shapes/still_lifes'
import { Cell } from '../types/types'
import { offsetCell, offsetShape } from '../util/shapeUtils'
const CELL_SIZE = 10

const cellMap: Map<string, boolean> = new Map()
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
const keyToCell = (key: string): Cell => {
  const [x,y] = key.split(',').map(Number)
  return {x,y}
}

[ block,
  beehive,
  loaf,
  boat,
  tub,
].map((shape, i) => offsetShape(shape, {x: i * 10, y: i * 10}))
.flat()
.forEach(makeCell)



const draw = (p: p5) => {
  p.background(200)
  const cells = Array.from(cellMap.keys()).map(keyToCell)
  cells.forEach(({x,y}) => {
    p.rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
  })
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

export default draw