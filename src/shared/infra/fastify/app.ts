import fastify from 'fastify'
import fastifyWebsocket from '@fastify/websocket'
import { websocketRoutes } from '@/shared/infra/fastify/routes'
import fastifyCookie from '@fastify/cookie'
import { usersRoutes } from '@/modules/users/infra/fastify/routes'

const _app = fastify()

_app.register(fastifyCookie)

_app.register(usersRoutes, {
  prefix: 'users',
})

_app.register(fastifyWebsocket)

_app.register(websocketRoutes)

export const App = _app
