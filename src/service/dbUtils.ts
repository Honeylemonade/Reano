import { Article, Word } from './types'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// TODO 提取环境变量
const DB_PATH = "./db.json"

type Data = {
    articles: Article[],
    knowedWords: Word[],
    unknowedWords: Word[]
}

const initData: Data = {
    articles: [],
    knowedWords: [],
    unknowedWords: []
}

const adapter = new JSONFile<Data>(DB_PATH)
const db = new Low<Data>(adapter, initData)

export default db