import { inject, injectable } from 'tsyringe'
import { IDocumentsRepository } from '../../repositories/IDocumentsRepository'
import { IDocument } from '../../models/IDocument'
import { NotepadCoopException } from '@/shared/errors/NotepadCoopException'

@injectable()
export class FindDocumentService {
  constructor(
    @inject('DocumentsRepository')
    private documentsRepository: IDocumentsRepository,
  ) {}

  public async execute(id: string, userId: string): Promise<IDocument> {
    const document = await this.documentsRepository.findById(id)
    if (document.userId !== userId)
      throw new NotepadCoopException('Unauthorized access.', 401)
    return document
  }
}
