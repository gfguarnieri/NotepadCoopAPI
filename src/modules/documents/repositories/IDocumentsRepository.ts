import { ICreateDocumentDTO } from '@/modules/documents/dtos/ICreateDocumentDTO'
import { IUpdateAllDocumentDTO } from '@/modules/documents/dtos/IUpdateAllDocumentDTO'
import { IDocument } from '@/modules/documents/models/IDocument'

export interface IDocumentsRepository {
  create({ title, userId }: ICreateDocumentDTO): Promise<IDocument>
  update(
    id: string,
    { title, content }: IUpdateAllDocumentDTO,
  ): Promise<IDocument>
  remove(id: string): Promise<void>
  findById(id: string): Promise<IDocument>
  findDocumentsByUser(userId: string): Promise<IDocument[]>
}
