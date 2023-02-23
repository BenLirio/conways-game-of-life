import p5 from 'p5'
import draw from './hooks/draw'
import { mouseMoved } from './hooks/mouseMoved'
import { mousePressed } from './hooks/mousePresses'
import { mouseReleased } from './hooks/mouseReleased'
import setup from './hooks/setup'
import windowResized from './hooks/windowResized'
import './index.css'

window.addEventListener('DOMContentLoaded', () => {
  const p5Div = document.getElementById('p5-div')
  new p5((p:p5) => {
    
    p.setup = () => setup(p)
    p.draw = () => draw(p)
    p.windowResized = () => windowResized(p)
    p.mouseMoved = () => mouseMoved(p)
    p.mousePressed = () => mousePressed(p)
    p.mouseReleased = () => mouseReleased(p)

  }, p5Div)
})