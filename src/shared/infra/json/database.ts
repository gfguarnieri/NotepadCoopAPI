import fs from 'node:fs/promises'
import { IContent } from '@/modules/documents/models/IContent'
import { IDocument } from '@/modules/documents/models/IDocument'
import { IUser } from '@/modules/users/models/IUser'

const databasePath = new URL('db_file.json', import.meta.url)
interface IDatabaseJSON {
  documents: IDocument[]
  users: IUser[]
  content: IContent[]
}

class Database {
  #database: IDatabaseJSON

  constructor() {
    fs.readFile(databasePath)
      .then((data) => {
        this.#database = JSON.parse(data.toString())
      })
      .catch(() => {
        this.#database = {
          documents: [],
          users: [],
          content: [],
        }
        this.#persist()
      })
  }

  async #persist() {
    await fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  async create(table: string, data: any) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
      this.#persist()
    }
  }

  update(table: string, id: string, data: any) {
    if (Array.isArray(this.#database[table])) {
      const item = this.findById(table, id)
      if (item) {
        Object.assign(item, data)
        const index = this.#database[table].findIndex((e) => e.id === id)
        this.#database[table][index] = item
        this.#persist()
      }
    }
  }

  remove(table: string, id: string) {
    if (Array.isArray(this.#database[table])) {
      const index = this.#database[table].findIndex((e) => e.id === id)
      if (index < 1) return
      this.#database[table].splice(index, 1)
      this.#persist()
    }
  }

  findById(table: string, id: string) {
    if (Array.isArray(this.#database[table])) {
      const index = this.#database[table].findIndex((e) => {
        return e.id === id
      })
      if (index < 0) return
      this.#persist()
      return this.#database[table][index]
    }
  }

  select(table: string, search: any): any[] {
    const data = this.#database[table] ?? []
    if (!search || Object.keys(search).length === 0) {
      return data
    }
    return data.filter((item) => {
      return Object.keys(search).every((key) => {
        return item[key] === search[key]
      })
    })
  }

  exportDatabase() {
    return this.#database
  }
}

const _database = new Database()

export const database = _database
