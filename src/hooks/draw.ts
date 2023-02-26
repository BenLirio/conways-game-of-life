import p5 from 'p5'
import { getToolSelector } from '../state/elements'
import { getMouseDown, getPanning, getPosOffset, getScale } from '../state/globals'
import { CELL_SIZE, getCells, mouseCell, update } from '../state/state'
import { Tool } from '../types/types'
import { getSelectedShape, inBounds, offsetCell } from '../util/shapeUtils'

const drawGrid = (p: p5) => {
  p.push()
  p.strokeWeight(1)
  p.stroke(p.color(255,255,255,75))
  const offset = {...getPosOffset()}
  if (getPanning()) {
    offset.x += getMouseDown().x - p.mouseX
    offset.y += getMouseDown().y - p.mouseY
  }
  for (let x = offset.x - (offset.x%(getScale()*CELL_SIZE)); x < offset.x + p.width; x += getScale()*CELL_SIZE) {
    p.line(x, offset.y, x, offset.y + p.height)
  }
  for (let y = offset.y-(offset.y%(getScale()*CELL_SIZE)); y < offset.y + p.height; y += getScale()*CELL_SIZE) {
    p.line(offset.x, y, offset.x + p.width, y)
  }
  p.pop()
}

const drawCells = (p: p5) => {
  p.push()
  p.stroke('white')
  p.strokeWeight(1)
  p.fill('black')
  getCells().forEach(({x,y}) => {
    p.rect(x * getScale()*CELL_SIZE, y * getScale()*CELL_SIZE, getScale()*CELL_SIZE, getScale()*CELL_SIZE)
  })
  p.pop()
}

const drawMouseCell = (p: p5) => {
  p.push()
  p.noStroke()
  p.fill(p.color(0,0,0,75))
  const cells = getSelectedShape().map(offsetCell(mouseCell))
  if (p.mouseX >= 0 && p.mouseY >= 0 && p.mouseX < p.width && p.mouseY < p.height) {
    cells.forEach(({x,y}) =>
      p.rect(x * getScale()*CELL_SIZE, y * getScale()*CELL_SIZE, getScale()*CELL_SIZE, getScale()*CELL_SIZE)
    )
  }
  p.pop()
}

const drawOffset = (p: p5) => {
  p.translate(-getPosOffset().x, -getPosOffset().y)
  if (getToolSelector().selected() === Tool.Pan) {
    if (getPanning()) {
      const { x, y } = getMouseDown()
      const dx = x - p.mouseX
      const dy = y - p.mouseY
      p.translate(-dx, -dy)
    }
  }
}

const draw = (p: p5) => {
  drawOffset(p)
  p.background(200)
  drawGrid(p)
  drawCells(p)
  if (getToolSelector().selected() === Tool.PlaceShape) {
    drawMouseCell(p)
  }
  update()
}

export default draw
