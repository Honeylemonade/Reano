
export class Article {
    public id: String = crypto.randomUUID();
    public tilte: String | undefined;
    public content: String | undefined;
    public createTime: Date = new Date();
    public updateTime: Date = new Date();

    constructor(tilte: string, content: string) {
        this.tilte = tilte
        this.content = content
    }
}

export enum WordState {
    KNOWED, UNKNOWED
}

export class Word {
    public word: String | undefined;
    public descrption: String | undefined;
    public state: WordState | undefined;
    public createTime: number | undefined;
    public updateTime: number | undefined;
}

