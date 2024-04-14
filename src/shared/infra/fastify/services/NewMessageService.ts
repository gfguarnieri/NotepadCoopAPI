import { UpdateContentControllerWS } from '@/modules/documents/infra/fastify/controllers/UpdateContentControllerWS'
import { WebSocket } from '@fastify/websocket'
import { FastifyRequest } from 'fastify'
import zod from 'zod'

export async function NewMessageService(
  socket: WebSocket,
  req: FastifyRequest,
  content: string,
) {
  const messageWSSchema = zod.object({
    type: zod.enum(['update']),
    message: zod.unknown(),
  })

  const { type, message } = await messageWSSchema.parse(JSON.parse(content))

  const updateContentControllerWS = new UpdateContentControllerWS()

  switch (type) {
    case 'update':
      await updateContentControllerWS.handle(req, socket, message)
      break
  }
}
