import { WebSocket } from '@fastify/websocket'

interface IClientSocket {
  id: string
  name?: string
  clientSocket: WebSocket
}

export const listConnection: IClientSocket[] = []
