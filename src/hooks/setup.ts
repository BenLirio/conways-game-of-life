import p5 from 'p5'
import { patterns, stillLifes } from '../shapes/patterns'
import { getPatternSelector, setPatternSelector } from '../state/elements'
import { setHeight, setWidth } from '../state/globals'
import { getLargestSize } from '../util/screenSize'

const setup = (p: p5) => {
  p.frameRate(20)
  const { width, height } = getLargestSize(p)
  setWidth(width)
  setHeight(height)
  const canvas = p.createCanvas(width, height)
  canvas.style('display', 'block')
  canvas.style('border', '3px solid black')
  setPatternSelector(p.createSelect())
  Object.keys(patterns).map(key => getPatternSelector().option(key))
}

export default setup
