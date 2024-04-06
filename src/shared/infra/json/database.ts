import { IDocument } from '@/modules/documents/models/IDocument'

interface IDatabaseJSON {
  documents: IDocument[]
}

class Database {
  #database: IDatabaseJSON

  constructor() {
    this.#database = {
      documents: [],
    }
  }

  create(table: string, data: any) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    }
  }

  update(table: string, id: string, data: any) {
    if (Array.isArray(this.#database[table])) {
      const item = this.findById(table, id)
      if (item) {
        Object.assign(item, data)
        const index = this.#database[table].findIndex((e) => e.id === id)
        this.#database[table][index] = item
      }
    }
  }

  remove(table: string, id: string) {
    if (Array.isArray(this.#database[table])) {
      const index = this.#database[table].findIndex((e) => e.document.id === id)
      if (index < 1) return
      this.#database[table].splice(index, 1)
    }
  }

  findById(table: string, id: string) {
    if (Array.isArray(this.#database[table])) {
      const index = this.#database[table].findIndex((e) => e.document.id === id)
      if (index < 0) return
      return this.#database[table][index]
    }
  }

  exportDatabase() {
    return this.#database
  }
}

const _database = new Database()

export const database = _database
