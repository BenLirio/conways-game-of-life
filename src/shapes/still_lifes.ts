import { newShape } from './shape'

const block = newShape(`
xx
xx
`)

const beehive = newShape(`
oxxo
xoox
oxxo
`)

const loaf = newShape(`
oxxo
xoox
oxox
ooxo
`)

const boat = newShape(`
xx
xox
ox
`)

const tub = newShape(`
oxo
xox
oxo
`)
export const stillLifes = {
  block,
  beehive,
  loaf,
  boat,
  tub,
}