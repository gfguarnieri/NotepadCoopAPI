import { IUpdateContentDTO } from '@/modules/documents/dtos/IUpdateContentDTO'
import { UpdateContentService } from '@/modules/documents/services/UpdateContent/UpdateContentService'
import { WebSocket } from '@fastify/websocket'
import { FastifyRequest } from 'fastify'
import { container } from 'tsyringe'
import { z } from 'zod'

export class UpdateContentControllerWS {
  async handle(
    request: FastifyRequest,
    socket: WebSocket,
    message: any,
  ): Promise<void> {
    const updateContentSchema = z.object({
      id: z.string(),
      content: z.unknown(),
    })
    const { id, content } = updateContentSchema.parse(
      message,
    ) as IUpdateContentDTO

    const updateContentService = container.resolve(UpdateContentService)

    const document = await updateContentService.execute({
      id,
      userId: request.userId,
      content,
    })

    return socket.send(JSON.stringify(document))
  }
}
