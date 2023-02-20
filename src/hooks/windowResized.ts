import p5 from 'p5'
import { setHeight, setWidth } from '../state/globals'
import { getLargestSize } from '../util/screenSize'

const windowResized = (p: p5) => {
  const {width, height} = getLargestSize(p)
  setWidth(width)
  setHeight(height)
  p.resizeCanvas(width, height)
}
export default windowResized