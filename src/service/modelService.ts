import db from './dbUtils'
import { Article } from './types';


export function addArticle(article: Article) {
    db.data.articles.unshift(article)
    db.write()
}

export function getArticles() {
    return db.data.articles
}

export function getArticle(id: string): Article {
    let res = db.data.articles.find(e => e.id === id)
    if (res == undefined) {
        return new Article("", "")
    }
    return res
}

export function updateArticle(article: Article) {
    let art = db.data.articles.find(e => e.id === article.id)
    console.log(article);
    if (art == undefined) {
        console.error("不存在目标文章");
    } else {
        art.title = article.title
        art.content = article.content
        art.updateTime = new Date()
    }
    db.write()
}

export function deleteArticleById(id: string) {
    db.data.articles.splice(db.data.articles.findIndex(e => e.id === id), 1)
    db.write()
}