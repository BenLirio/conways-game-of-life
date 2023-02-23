export interface IVec2 {
  x: number
  y: number
}
export type IPos = IVec2
export type Shape = IPos[]
export enum Tool {
  Pan = 'Pan',
  PlaceShape = 'Place Shape',
}