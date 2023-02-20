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

const blinker = newShape(`
x
x
x`)
const toad = newShape(`
oxxx
xxx`)

const beacon = newShape(`
xx
xx
ooxx
ooxx`)
const pulsar = newShape(`
oooooxoooxooooo
oooooxoooxooooo
oooooxoooxooooo
ooooxxoooxxoooo
oooxoxoooxoxooo
xxxxxoooooxxxxx
ooooooooooooooo
ooooooooooooooo
ooooooooooooooo
xxxxxoooooxxxxx
oooxoxoooxoxooo
ooooxxoooxxoooo
oooooxoooxooooo
oooooxoooxooooo
oooooxoooxooooo`)

const pentaDecathlon = newShape(`
ooxooooxoo
xxoxxxxoxx
ooxooooxoo`)

export const stillLifes = {
  block,
  beehive,
  loaf,
  boat,
  tub,
}

export const oscillators = {
  blinker,
  toad,
  beacon,
  pulsar,
  pentaDecathlon,
}
export const patterns = {
  ...stillLifes,
  ...oscillators,
}