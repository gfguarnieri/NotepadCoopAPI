import { FindUserByTokenService } from '@/modules/users/services/FindUserByToken/FindUserByTokenService'
import { NotepadCoopException } from '@/shared/errors/NotepadCoopException'
import { FastifyReply, FastifyRequest } from 'fastify'
import { container } from 'tsyringe'

export async function VerifyTokenCache(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const token = request.cookies.token
  if (!token) {
    return reply.status(401).send({
      error: 'Unauthorized',
    })
  }
  const findUserByTokenService = container.resolve(FindUserByTokenService)
  const user = await findUserByTokenService.execute(token)
  if (!user) throw new NotepadCoopException('Error authenticate', 401)
  request.userId = user.id
}
