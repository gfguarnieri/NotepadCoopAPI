import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ILoginUserDTO } from '../../dtos/ILoginUserDTO'
import { ISimpleUserDTO } from '../../dtos/ISimpleUserDTO'
import { NotepadCoopException } from '@/shared/errors/NotepadCoopException'
import { randomUUID } from 'crypto'
import { PasswordHash } from '@/shared/security/PasswordHash'

@injectable()
export class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    email,
    password,
  }: ILoginUserDTO): Promise<ISimpleUserDTO> {
    const user = await this.usersRepository.authenticate({
      email,
      password: PasswordHash.GenerateHash(password),
    })
    if (!user) {
      throw new NotepadCoopException('Invalid password/email', 401)
    }
    user.token = randomUUID()
    this.usersRepository.refreshToken(user.id, user.token)
    return user
  }
}
