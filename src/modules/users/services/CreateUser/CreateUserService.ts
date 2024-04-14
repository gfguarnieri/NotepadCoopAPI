import { inject, injectable } from 'tsyringe'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUser } from '../../models/IUser'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { PasswordHash } from '@/shared/utils/PasswordHash'
import { NotepadCoopException } from '@/shared/errors/NotepadCoopException'

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
    const user = await this.usersRepository.findUserByEmail(email)
    if (user) {
      throw new NotepadCoopException('Email already exists.', 401)
    }

    return await this.usersRepository.create({
      email,
      name,
      password: PasswordHash.GenerateHash(password),
    })
  }
}
