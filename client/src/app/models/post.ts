import { Author } from "./author";

export class Post {
  id: number;
  title: string;
  text: string;
  picture: string;
  date: number;
  author: Author;

  constructor() {
    this.id = -1;
    this.title = "null";
    this.text = "null";
    this.picture = "null";
    this.date = Date.now();
    this.author = new Author();
  }
}