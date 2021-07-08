import { Author } from "./author";

export class Comment {
    id: number;
    text: string;
    date: number;
    author: Author;
    postID: number;

    constructor() {
        this.id = -1;
        this.text = "null";
        this.date = Date.now();
        this.author = new Author();
        this.postID = -1;
    }
}
