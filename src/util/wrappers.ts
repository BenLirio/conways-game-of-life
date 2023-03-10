import p5 from 'p5'

export const inContext = (fn: (p: p5) => void) => (p: p5) => {
  p.push()
  fn(p)
  p.pop()
}