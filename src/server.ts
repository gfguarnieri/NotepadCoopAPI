import 'reflect-metadata'
import './shared/container'
import { container } from 'tsyringe'
import { CreateDocumentService } from './modules/documents/services/CreateDocument/CreateDocumentService'
import { FindDocumentService } from './modules/documents/services/FindDocument/FindDocumentService'

const createDocumentService = container.resolve(CreateDocumentService)
const findDocumentService = container.resolve(FindDocumentService)

async function simulacao() {
  const d1 = await createDocumentService.execute({
    title: 'Teste',
    userId: '123',
  })
  const d2 = await createDocumentService.execute({
    title: 'Teste',
    userId: '123',
  })

  await findDocumentService.execute(d1.id)
  await findDocumentService.execute(d2.id)
}

simulacao()
