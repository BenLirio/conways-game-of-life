import p5 from 'p5'

const WINDOW_PADDING_WIDTH = 20
const WINDOW_PADDING_HEIGHT = 120

const aspect_2_1 = (width: number) => ({ width, height: width/2 })

export const getLargestSize = (p: p5) => [
    aspect_2_1((1<<8)),
    aspect_2_1((1<<8) + (1<<7)),
    aspect_2_1((1<<8) + (1<<7) + (1<<6)),
    aspect_2_1((1<<9)),
    aspect_2_1((1<<9) + (1<<8)),
    aspect_2_1((1<<9) + (1<<8) + (1<<7)),
    aspect_2_1((1<<9) + (1<<8) + (1<<7) + (1<<6)),
    aspect_2_1(1<<10),
  ].reduce((acc, {width, height}) =>
    p.windowWidth > width + WINDOW_PADDING_WIDTH
    && p.windowHeight > height + WINDOW_PADDING_HEIGHT
    ? { width, height }
    : acc
  , { width: 0, height: 0 })