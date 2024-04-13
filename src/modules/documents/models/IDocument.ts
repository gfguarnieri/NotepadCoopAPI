import { IContent } from './IContent'

export interface IDocument {
  id?: string
  userId?: string
  title: string
  content?: IContent
}
