import p5 from 'p5'
import { setScale } from '../state/globals'
import { mouseInBounds } from '../util/bounds'

const MAX_SCALE = 10
const MIN_SCALE = 0.3

export const mouseWheel = (p: p5, {delta}: any) => {
  if (!mouseInBounds(p)) return
  const {max, min} = Math
  const scaledDelta = - (delta / 1000)
  setScale(scale => {
    return max(min(scale * 2**scaledDelta, MAX_SCALE), MIN_SCALE)
  })
}