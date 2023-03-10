import { IVec2 } from '../types/types'
import { setGrabbingCursor, setGrabCursor, setPointerCursor } from '../util/styles'
import { Tool } from '../types/types'
import { ZOOMED_OUT } from './config'
import { getPlayButton } from './elements'

let paused: boolean
export const isPaused = () => paused
export const togglePause = () => {
  paused = !paused
  getPlayButton().html(paused ? 'Play' : 'Pause')
}


let width: number
export const getWidth = () => width
export const setWidth = (w: number) => width = w

let height: number
export const getHeight = () => height
export const setHeight = (h: number) => height = h

let mouseDown: IVec2
export const setMouseDown = (pos: IVec2) => mouseDown = pos
export const getMouseDown = () => mouseDown

let panning: boolean
export const setPanning = (p: boolean) => {
  if (p) setGrabbingCursor()
  else setGrabCursor()
  panning = p
}
export const getPanning = () => panning

let posOffset: IVec2 = {x: 0, y: 0}
export const setPosOffset = (f: (pos: IVec2) => IVec2) => posOffset = f(posOffset)
export const getPosOffset = () => posOffset

let scale = 1
export const setScale = (f: (scale: number) => number) => scale = f(scale)
export const getScale = () => scale

let tool: Tool
export const setTool = (t: Tool) => {
  switch (t) {
    case Tool.Pan:
      setGrabCursor()
      break
    case Tool.PlaceShape:
      setPointerCursor()
      break
    default:
      console.error('Unknown tool')
  }
  tool = t
}
export const getTool = () => tool

export const isZoomedOut = () => getScale() < ZOOMED_OUT