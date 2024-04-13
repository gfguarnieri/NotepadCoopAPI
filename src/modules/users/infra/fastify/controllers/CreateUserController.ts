import { container } from 'tsyringe'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateUserService } from '@/modules/users/services/CreateUser/CreateUserService'
import { z } from 'zod'

export class CreateUserController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const createUserSchema = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
    })

    const { name, email, password } = createUserSchema.parse(request.body)

    const createUserService = container.resolve(CreateUserService)

    await createUserService.execute({ name, email, password })
    return reply.status(200).send()
  }
}
