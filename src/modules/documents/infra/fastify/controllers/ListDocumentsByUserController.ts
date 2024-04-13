import { ListDocumentsByUserService } from '@/modules/documents/services/ListDocumentsByUser/ListDocumentsByUserService'
import { FastifyReply, FastifyRequest } from 'fastify'
import { container } from 'tsyringe'

export class ListDocumentsByUserController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const listDocumentsByUserService = container.resolve(
      ListDocumentsByUserService,
    )

    const documents = await listDocumentsByUserService.execute(request.userId)
    return reply.status(200).send(documents)
  }
}
