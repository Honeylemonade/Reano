//import { Article } from './types'
const fs = require("fs")
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const DB_PATH = "./db.json"

function init() {
    // 如果文件不存在则创建文件则进行初始化
    if (!fs.existsSync(DB_PATH)) {
        console.log('文件不存在开始创建存储文件')
    }
}

type Data = {
    messages: string[]
}

const defaultData: Data = { messages: [] }
const adapter = new JSONFile<Data>('db.json')
const db = new Low<Data>(adapter, defaultData)

init()
function save<T>(model: T) {
    // 把对象转换为 json
}

export default db