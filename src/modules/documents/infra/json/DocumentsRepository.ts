import { database } from '@/shared/infra/json/database'
import { ICreateDocumentDTO } from '@/modules/documents/dtos/ICreateDocumentDTO'
import { IUpdateAllDocumentDTO } from '@/modules/documents/dtos/IUpdateAllDocumentDTO'
import { IDocument } from '@/modules/documents/models/IDocument'
import { IDocumentsRepository } from '@/modules/documents/repositories/IDocumentsRepository'
import { Document } from './entities/Document'

export class DocumentsRepository implements IDocumentsRepository {
  async create({ title, userId }: ICreateDocumentDTO): Promise<IDocument> {
    const document = new Document({ title, userId })
    database.create(Document.tableName, document)
    return document
  }

  async update(
    id: string,
    { title, content }: IUpdateAllDocumentDTO,
  ): Promise<IDocument> {
    const document = database.findById(Document.tableName, id) as IDocument
    Object.assign(document, { title, content })
    database.update(Document.tableName, id, document)
    return document
  }

  async remove(id: string): Promise<void> {
    database.findById(Document.tableName, id)
  }

  async findById(id: string): Promise<IDocument> {
    const document = database.findById(Document.tableName, id)
    return document
  }

  async findDocumentsByUser(userId: string): Promise<IDocument[]> {
    const document = database.select(Document.tableName, { userId })
    return document
  }
}
