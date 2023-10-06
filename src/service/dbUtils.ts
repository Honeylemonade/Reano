import { Article, Word } from './types'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// TODO 提取环境变量
const DB_PATH = "./db.json"

type Schema = {
    articles: Article[],
    knowedWords: Word[],
    unknowedWords: Word[]
}

const initData: Schema = {
    articles: [],
    knowedWords: [],
    unknowedWords: []
}

const adapter = new JSONFile<Schema>(DB_PATH)
const db = new Low<Schema>(adapter, initData)
await db.read()

export default db