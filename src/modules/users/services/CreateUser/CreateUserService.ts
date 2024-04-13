import { inject, injectable } from 'tsyringe'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUser } from '../../models/IUser'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { PasswordHash } from '@/shared/security/PasswordHash'

@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<IUser> {
    return await this.usersRepository.create({
      email,
      name,
      password: PasswordHash.GenerateHash(password),
    })
  }
}
