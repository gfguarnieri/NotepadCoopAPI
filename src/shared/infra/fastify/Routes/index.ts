import { VerifyTokenCache } from '../hooks/VerifyTokenCache'
import { NewConnectionService } from '../services/NewConnectionService'
import { FastifyInstance } from 'fastify'
export async function websocketRoutes(server: FastifyInstance) {
  server.addHook('preValidation', VerifyTokenCache)
  server.get('/live', { websocket: true }, NewConnectionService)
}
