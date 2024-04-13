import { inject, injectable } from 'tsyringe'
import { ICreateDocumentDTO } from '@/modules/documents/dtos/ICreateDocumentDTO'
import { IDocumentsRepository } from '@/modules/documents/repositories/IDocumentsRepository'
import { IDocument } from '@/modules/documents/models/IDocument'

@injectable()
export class CreateDocumentService {
  constructor(
    @inject('DocumentsRepository')
    private documentsRepository: IDocumentsRepository,
  ) {}

  public async execute({
    title,
    userId,
  }: ICreateDocumentDTO): Promise<IDocument> {
    return await this.documentsRepository.create({
      title,
      userId,
    })
  }
}
