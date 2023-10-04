export class Article {
    public tilte: String | undefined;
    public content: String | undefined;
    public createTime: number | undefined;
    public updateTime: number | undefined;
}

export enum WordState {
    KNOW, UNKNOW
}

export class Word {
    public word: String | undefined;
    public descrption: String | undefined;
    public state: WordState | undefined;
    public createTime: number | undefined;
    public updateTime: number | undefined;
}

