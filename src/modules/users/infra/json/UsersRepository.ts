import { database } from '@/shared/infra/json/database'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from './entities/User'
import { IUser } from '../../models/IUser'
import { ILoginUserDTO } from '../../dtos/ILoginUserDTO'
import { ISimpleUserDTO } from '../../dtos/ISimpleUserDTO'

export class UsersRepository implements IUsersRepository {
  async create({ email, name, password }: ICreateUserDTO): Promise<IUser> {
    const user = new User({ email, name, password })
    database.create(User.tableName, user)
    return user
  }

  async update(
    id: string,
    { email, name, password }: ICreateUserDTO,
  ): Promise<IUser> {
    const user = database.findById(User.tableName, id) as IUser
    Object.assign(user, { email, name, password })
    database.update(User.tableName, id, user)
    return user
  }

  async remove(id: string): Promise<void> {
    database.remove(User.tableName, id)
  }

  async findById(id: string): Promise<IUser> {
    const user = database.findById(User.tableName, id) as IUser
    return user
  }

  async authenticate({
    email,
    password,
  }: ILoginUserDTO): Promise<ISimpleUserDTO> {
    const user = database.select(User.tableName, {
      email,
      password,
    }) as ISimpleUserDTO
    if (!user) return null
    return user[0]
  }

  async refreshToken(id: string, hash: string): Promise<void> {
    const user = database.findById(User.tableName, id) as IUser
    user.token = hash
    database.update(User.tableName, id, user)
  }

  async findUserByToken(token: string): Promise<ISimpleUserDTO> {
    const user = database.select(User.tableName, { token }) as ISimpleUserDTO
    if (!user) return null
    return user[0]
  }
}
