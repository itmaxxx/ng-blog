export class Author {
  username: string;
  fullname: string;
  picture: string;
  about: string;

  constructor(username: string = "null") {
    this.username = username;
    this.fullname = 'null';
    this.picture = 'null';
    this.about = 'null';
  }
}
