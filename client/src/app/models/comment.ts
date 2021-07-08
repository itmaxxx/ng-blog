import { Author } from "./author";

export class Comment {
  id: number;
  text: string;
  date: number;
  author: Author;
  postID: number;

  constructor(text: string = "null", postID: number = -1, username: string = "null") {
    this.id = -1;
    this.text = text || "null";
    this.date = Date.now();
    this.author = new Author(username);
    this.postID = postID || -1;
  }
}
