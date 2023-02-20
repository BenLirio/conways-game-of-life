import p5 from 'p5'
import { stillLifes } from '../shapes/still_lifes'
import { getPatternSelector } from '../state/elements'
import { CELL_SIZE, getCells, mouseCell, update } from '../state/state'
import { Shape } from '../types/types'
import { getSelectedShape, offsetCell } from '../util/shapeUtils'

const drawGrid = (p: p5) => {
  p.push()
  p.strokeWeight(1)
  p.stroke(p.color(255,255,255,75))
  for (let x = 0; x < p.width; x += CELL_SIZE) {
    p.line(x, 0, x, p.height)
  }
  for (let y = 0; y < p.height; y += CELL_SIZE) {
    p.line(0, y, p.width, y)
  }
  p.pop()
}

const drawCells = (p: p5) => {
  p.push()
  p.stroke('white')
  p.strokeWeight(1)
  p.fill('black')
  getCells().forEach(({x,y}) => {
    p.rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
  })
  p.pop()
}

const drawMouseCell = (p: p5) => {
  p.push()
  p.noStroke()
  p.fill(p.color(0,0,0,75))
  getSelectedShape()
    .map(offsetCell(mouseCell))
    .forEach(({x,y}) =>
      p.rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
    )
  p.pop()
}

const draw = (p: p5) => {
  p.background(200)
  drawGrid(p)
  drawCells(p)
  drawMouseCell(p)
  update()
}

export default draw
