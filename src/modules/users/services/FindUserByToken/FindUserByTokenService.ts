import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ISimpleUserDTO } from '../../dtos/ISimpleUserDTO'
import { NotepadCoopException } from '@/shared/errors/NotepadCoopException'

@injectable()
export class FindUserByTokenService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(token: string): Promise<ISimpleUserDTO> {
    const user = this.usersRepository.findUserByToken(token)
    if (!user) {
      throw new NotepadCoopException('Invalid password/email', 401)
    }
    return user
  }
}
