import { listConnection } from '@/shared/infra/fastify/clients'

export async function BroadCastMessageService(message: string) {
  for (const client of listConnection) {
    client.clientSocket.send(message)
  }
}
