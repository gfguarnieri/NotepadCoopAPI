import { inject, injectable } from 'tsyringe'
import { IDocumentsRepository } from '../../repositories/IDocumentsRepository'
import { IDocument } from '../../models/IDocument'

@injectable()
export class FindDocumentService {
  constructor(
    @inject('DocumentsRepository')
    private documentsRepository: IDocumentsRepository,
  ) {}

  public async execute(id: string): Promise<IDocument> {
    return await this.documentsRepository.findById(id)
  }
}
