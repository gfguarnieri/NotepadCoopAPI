import fastify from 'fastify'
import fastifyWebsocket from '@fastify/websocket'
import { Routes } from './Routes'

const _app = fastify()

_app.register(fastifyWebsocket)

_app.register(Routes)

export const App = _app
