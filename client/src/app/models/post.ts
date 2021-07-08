import { Author } from "./author";

export class Post {
  id: number;
  title: string;
  text: string;
  picture: string;
  date: number;
  author: Author;

  constructor(title: string = "null", picture: string = "null", text: string = "null", username: string = "null") {
    this.id = -1;
    this.title = title || "null";
    this.text = text || "null";
    this.picture = picture || "null";
    this.date = Date.now();
    this.author = new Author(username);
  }
}
