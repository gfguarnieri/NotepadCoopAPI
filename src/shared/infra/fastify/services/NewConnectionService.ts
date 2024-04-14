import { listConnection } from '@/shared/infra/fastify/clients'
import { WebSocket } from '@fastify/websocket'
import { FastifyRequest } from 'fastify'
import { NewMessageService } from './NewMessageService'

export async function NewConnectionService(
  socket: WebSocket,
  req: FastifyRequest,
) {
  listConnection.push({ id: req.id, clientSocket: socket })
  socket.on('message', async (message: string) => {
    await NewMessageService(socket, req, message)
  })
}
