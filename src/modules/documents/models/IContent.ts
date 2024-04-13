import { IElement } from './IElement'

export interface IContent {
  version?: string
  time?: number
  blocks: IElement[]
}
