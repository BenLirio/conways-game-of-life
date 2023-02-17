import p5 from 'p5'

interface Cell {
  x: number
  y: number
}
const cellMap: Map<string, boolean> = new Map()
const isCell = (x: number, y: number): boolean =>
  cellMap.get(`${x},${y}`) || false
const makeCell = ({x,y}: Cell): void => {
  cellMap.set(`${x},${y}`, true)
}
const killCell = ({x,y}: Cell): void => {
  cellMap.delete(`${x},${y}`)
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

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (Math.random() > 0.5) makeCell({x: i, y: j})
  }
}

const draw = (p: p5) => {
  p.background(200)
  const cells = Array.from(cellMap.keys()).map(keyToCell)
  cells.forEach(({x,y}) => {
    p.rect(x * 10, y * 10, 10, 10)
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