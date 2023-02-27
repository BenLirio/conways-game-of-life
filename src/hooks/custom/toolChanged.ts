import { getToolSelector } from '../../state/elements'
import { setTool } from '../../state/globals'
import { Tool } from '../../types/types'

export const toolChanged = () =>
  setTool(getToolSelector().selected() as Tool)