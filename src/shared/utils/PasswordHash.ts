import { createHash } from 'crypto'

export class PasswordHash {
  static GenerateHash(password: string): string {
    return createHash('sha256').update(password).digest('hex').toString()
  }
}
