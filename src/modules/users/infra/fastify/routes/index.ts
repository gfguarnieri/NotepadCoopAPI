import { CreateUserController } from '../controllers/CreateUserController'
import { AuthenticateUserController } from '../controllers/AutenticateUserController'
import { FastifyInstance } from 'fastify'

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

export async function usersRoutes(server: FastifyInstance) {
  server.post('/', createUserController.handle)
  server.post('/authenticate', authenticateUserController.handle)
}
