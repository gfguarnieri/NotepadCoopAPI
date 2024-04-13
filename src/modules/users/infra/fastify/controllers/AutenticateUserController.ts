import { container } from 'tsyringe'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { AuthenticateUserService } from '@/modules/users/services/AuthenticateUser/AuthenticateUserService'

export class AuthenticateUserController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const authenticateUserSchema = z.object({
      email: z.string(),
      password: z.string(),
    })

    const { email, password } = authenticateUserSchema.parse(request.body)
    const authenticateUserService = container.resolve(AuthenticateUserService)
    const user = await authenticateUserService.execute({ email, password })

    reply.setCookie('token', user.token, {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    })

    return reply.status(200).send({
      token: user.token,
    })
  }
}
