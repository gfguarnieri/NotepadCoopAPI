import { IOutputData } from '@/modules/documents/models/IOutputData'

export interface IUpdateAllDocumentDTO {
  title?: string
  content: IOutputData
}
