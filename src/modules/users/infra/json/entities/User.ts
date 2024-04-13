import { IUser } from '@/modules/users/models/IUser'
import { randomUUID } from 'crypto'

export class User implements IUser {
  public static tableName = 'users'
  id?: string
  name: string
  email: string
  password: string
  token?: string
  constructor({ id, name, email, password, token }: User) {
    if (!id) this.id = randomUUID()
    this.name = name
    this.email = email
    this.password = password
    this.token = token
  }
}
