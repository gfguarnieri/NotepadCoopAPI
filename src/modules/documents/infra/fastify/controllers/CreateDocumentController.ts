import { CreateDocumentService } from '@/modules/documents/services/CreateDocument/CreateDocumentService'
import { FastifyReply, FastifyRequest } from 'fastify'
import { container } from 'tsyringe'
import { z } from 'zod'

export class CreateDocumentController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const createDocumentSchema = z.object({
      title: z.string(),
    })

    const { title } = createDocumentSchema.parse(request.body)

    const createDocumentService = container.resolve(CreateDocumentService)
    await createDocumentService.execute({ title, userId: request.userId })
    return reply.status(200).send()
  }
}
