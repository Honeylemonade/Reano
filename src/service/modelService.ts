import db from './dbUtils'
import { Article } from './types';


export function addArticle(article: Article) {
    db.data.articles.push(article)
    db.write()
}

export function getArticles() {
    return db.data.articles
}