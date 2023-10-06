
export class Article {
    public id: String = crypto.randomUUID();
    public title: String;
    public content: String;
    public createTime: Date = new Date();
    public updateTime: Date = new Date();

    constructor(title: string, content: string) {
        this.title = title
        this.content = content
    }
}

export enum WordState {
    KNOWED, UNKNOWED
}

export class Word {
    public word: String;
    public descrption: String;
    public state: WordState;
    public createTime: Date = new Date();
    public updateTime: Date = new Date();

    constructor(word: string, descrption: string) {
        this.word = word
        this.descrption = descrption
        this.state = WordState.UNKNOWED
    }

}

