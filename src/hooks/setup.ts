import p5 from 'p5'
import { block } from '../shapes/still_lifes'
import { getLargestSize } from '../util/screenSize'

const setup = (p: p5) => {
  p.frameRate(20)
  const { width, height } = getLargestSize(p)
  const canvas = p.createCanvas(width, height)
  canvas.style('display', 'block')
  canvas.style('border', '3px solid black')
  console.log(block)
}

export default setup
