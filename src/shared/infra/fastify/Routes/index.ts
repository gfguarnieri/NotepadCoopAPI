import { WebSocket } from '@fastify/websocket'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function Routes(server: FastifyInstance) {
  server.get(
    '/ws',
    { websocket: true },
    (socket: WebSocket, req: FastifyRequest) => {
      console.log(req.body)
      socket.on('message', (message) => {
        console.log(message.toString())
        socket.send('Teste')
      })
    },
  )
  server.get('/', (req: FastifyRequest, res: FastifyReply) => {
    return res.status(200).send({
      message: 'Rota Normal',
    })
  })
}
