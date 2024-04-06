import { IOutputBlockData } from './IOutputBlockData'

export interface IOutputData {
  version?: string
  time?: number
  blocks: IOutputBlockData[]
}
