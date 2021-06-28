import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post = { id: 0, title: 'null', text: 'null', picture: 'null', date: Date.now(), author: new Author() };
  // @Input() id: number = 0;
  // @Input() title: string = 'null';
  // @Input() text: string = 'null';
  // @Input() picture: string = 'null';

  constructor() { }

  ngOnInit(): void {
  }

}
