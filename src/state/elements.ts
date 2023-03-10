import { isPaused } from './globals'

let patternSelector
export const getPatternSelector = () => patternSelector
export const setPatternSelector = (selector) => patternSelector = selector

let toolSelector
export const getToolSelector = () => toolSelector
export const setToolSelector = (selector) => toolSelector = selector

let playButton
export const getPlayButton = () => playButton
export const setPlayButton = (button) => playButton = button