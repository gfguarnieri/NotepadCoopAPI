import { inject, injectable } from 'tsyringe'
import { IDocumentsRepository } from '@/modules/documents/repositories/IDocumentsRepository'
import { IDocument } from '@/modules/documents/models/IDocument'
import { NotepadCoopException } from '@/shared/errors/NotepadCoopException'
import { IUpdateContentDTO } from '../../dtos/IUpdateContentDTO'

@injectable()
export class UpdateContentService {
  constructor(
    @inject('DocumentsRepository')
    private documentsRepository: IDocumentsRepository,
  ) {}

  public async execute({
    id,
    userId,
    content,
  }: IUpdateContentDTO): Promise<IDocument> {
    const document = await this.documentsRepository.findById(id)
    if (document.userId !== userId) {
      throw new NotepadCoopException('Unauthorized access.', 401)
    }
    await this.documentsRepository.update(id, {
      title: document.title,
      content,
    })
    return document
  }
}
