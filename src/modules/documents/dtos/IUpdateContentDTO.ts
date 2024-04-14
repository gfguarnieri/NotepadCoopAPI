import { IContent } from '../models/IContent'

export interface IUpdateContentDTO {
  id: string
  userId?: string
  content: IContent
}
