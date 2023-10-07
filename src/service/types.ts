
export class Article {
    public id: string = crypto.randomUUID();
    public title: string;
    public content: string;
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
    public word: string;
    public descrption: string;
    public state: WordState;
    public createTime: Date = new Date();
    public updateTime: Date = new Date();

    constructor(word: string, descrption: string) {
        this.word = word
        this.descrption = descrption
        this.state = WordState.UNKNOWED
    }

}

