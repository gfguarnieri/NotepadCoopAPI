import { container } from 'tsyringe'

import { IUsersRepository } from '@/modules/users/repositories/IUsersRepository'
import { UsersRepository } from '../infra/json/UsersRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
