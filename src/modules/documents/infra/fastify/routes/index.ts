import { FastifyInstance } from 'fastify'
import { CreateDocumentController } from '../controllers/CreateDocumentController'
import { VerifyTokenCache } from '@/shared/infra/fastify/hooks/VerifyTokenCache'
import { ListDocumentsByUserController } from '../controllers/ListDocumentsByUserController'

const createDocumentController = new CreateDocumentController()
const listDocumentsByUser = new ListDocumentsByUserController()

export async function documentsRoutes(server: FastifyInstance) {
  server.addHook('preValidation', VerifyTokenCache)
  server.post('/', createDocumentController.handle)
  server.get('/my', listDocumentsByUser.handle)
  server.get('/:id', createDocumentController.handle)
}
