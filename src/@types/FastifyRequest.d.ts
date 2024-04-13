// eslint-disable-next-line
import { FastifyRequest } from 'fastify'
declare module 'fastify' {
  export interface FastifyRequest {
    userId?: string | null
  }
}
