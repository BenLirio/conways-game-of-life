import p5 from 'p5'
import { stillLifes } from '../shapes/still_lifes'
import { getPatternSelector, setPatternSelector } from '../state/elements'
import { getLargestSize } from '../util/screenSize'

const setup = (p: p5) => {
  p.frameRate(20)
  const { width, height } = getLargestSize(p)
  const canvas = p.createCanvas(width, height)
  canvas.style('display', 'block')
  canvas.style('border', '3px solid black')
  setPatternSelector(p.createSelect())
  Object.keys(stillLifes).map(key => getPatternSelector().option(key))
}

export default setup
