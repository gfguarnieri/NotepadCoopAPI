import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { ILoginUserDTO } from '../dtos/ILoginUserDTO'
import { ISimpleUserDTO } from '../dtos/ISimpleUserDTO'
import { IUser } from '../models/IUser'

export interface IUsersRepository {
  create({ email, name, password }: ICreateUserDTO): Promise<IUser>
  update(id: string, { email, name, password }: ICreateUserDTO): Promise<IUser>
  remove(id: string): Promise<void>
  findById(id: string): Promise<IUser>
  authenticate({ email, password }: ILoginUserDTO): Promise<ISimpleUserDTO>
  refreshToken(id: string, token: string): Promise<void>
  findUserByToken(token: string): Promise<ISimpleUserDTO>
}
