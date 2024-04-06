import { IDocument } from '@/modules/documents/models/IDocument'
import { IOutputData } from '@/modules/documents/models/IOutputData'
import { randomUUID } from 'crypto'

export class Document implements IDocument {
  public static tableName = 'documents'
  id?: string
  userId?: string
  title: string
  content?: IOutputData

  constructor({ title, content, id, userId }: Document) {
    if (!id) this.id = randomUUID()
    this.title = title
    this.content = content
    this.userId = userId
  }
}
