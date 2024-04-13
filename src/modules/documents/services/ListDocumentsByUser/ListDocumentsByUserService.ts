import { inject, injectable } from 'tsyringe'
import { IDocumentsRepository } from '../../repositories/IDocumentsRepository'
import { IDocument } from '../../models/IDocument'

@injectable()
export class ListDocumentsByUserService {
  constructor(
    @inject('DocumentsRepository')
    private documentsRepository: IDocumentsRepository,
  ) {}

  public async execute(userId: string): Promise<IDocument[]> {
    return await this.documentsRepository.findDocumentsByUser(userId)
  }
}
