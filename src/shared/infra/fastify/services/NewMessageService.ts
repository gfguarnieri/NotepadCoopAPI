import { WebSocket } from '@fastify/websocket'
import zod from 'zod'

export async function NewMessageService(socket: WebSocket, id, message) {
  const messageWSSchema = zod.object({
    id: zod.string(),
    type: zod.enum(['update', 'delete']),
    message: zod.string(),
  })

  const _message = await messageWSSchema.safeParseAsync(JSON.parse(message))
  if (_message.success === false) {
    socket.send(
      JSON.stringify({
        error: 1,
        message: 'Invalid',
      }),
    )
  }
}
