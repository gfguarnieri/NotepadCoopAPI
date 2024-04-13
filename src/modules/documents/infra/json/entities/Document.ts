import { IDocument } from '@/modules/documents/models/IDocument'
import { IContent } from '@/modules/documents/models/IContent'
import { randomUUID } from 'crypto'

export class Document implements IDocument {
  public static tableName = 'documents'
  id?: string
  userId?: string
  title: string
  content?: IContent

  constructor({ title, content, id, userId }: Document) {
    if (!id) this.id = randomUUID()
    this.title = title
    this.content = content
    this.userId = userId
    this.content = {
      blocks: [],
      time: null,
      version: '0',
    }
  }
}
