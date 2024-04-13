import { FastifyInstance } from 'fastify'
import { CreateDocumentController } from '../controllers/CreateDocumentController'
import { VerifyTokenCache } from '@/shared/infra/fastify/hooks/VerifyTokenCache'

const createDocumentController = new CreateDocumentController()

export async function documentsRoutes(server: FastifyInstance) {
  server.addHook('preValidation', VerifyTokenCache)
  server.post('/', createDocumentController.handle)
}
