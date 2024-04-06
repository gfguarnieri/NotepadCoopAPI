import { container } from 'tsyringe'

import { IDocumentsRepository } from '@/modules/documents/repositories/IDocumentsRepository'
import { DocumentsRepository } from '@/modules/documents/infra/json/DocumentsRepository'

container.registerSingleton<IDocumentsRepository>(
  'DocumentsRepository',
  DocumentsRepository,
)
