import { IOutputData } from './IOutputData'

export interface IDocument {
  id?: string
  userId?: string
  title: string
  content?: IOutputData
}
