import p5 from 'p5'
import { patterns, stillLifes } from '../shapes/patterns'
import { getPatternSelector, getPlayButton, getToolSelector, setPatternSelector, setPlayButton, setToolSelector } from '../state/elements'
import { isPaused, setHeight, setTool, setWidth, togglePause } from '../state/globals'
import { Tool } from '../types/types'
import { getLargestSize } from '../util/screenSize'
import { toolChanged } from './custom/toolChanged'

const setup = (p: p5) => {
  p.frameRate(20)
  const { width, height } = getLargestSize(p)
  setWidth(width)
  setHeight(height)
  const canvas = p.createCanvas(width, height)
  canvas.style('display', 'block')
  canvas.style('border', '3px solid black')

  setPlayButton(p.createButton('Pause'))
  getPlayButton().mousePressed(() => togglePause())

  p.createDiv('Patterns')
  setPatternSelector(p.createSelect())
  Object.keys(patterns).map(key => getPatternSelector().option(key))
  getPatternSelector().class('selector')

  p.createDiv('Tool')
  setToolSelector(p.createSelect())
  getToolSelector().changed(toolChanged)
  getToolSelector().class('selector')
  const tools = Object.values(Tool)
  tools.map(tool => getToolSelector().option(tool))
  setTool(tools[0])

}

export default setup
