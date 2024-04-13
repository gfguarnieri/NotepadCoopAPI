import { IContent } from '@/modules/documents/models/IContent'

export interface IUpdateAllDocumentDTO {
  title?: string
  content: IContent
}
