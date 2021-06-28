import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // @Input() post: Post = { id: 0, title: 'null', text: 'null' };
  @Input() postId: number = 0;
  @Input() title: string = 'null';
  @Input() text: string = 'null';

  constructor() { }

  ngOnInit(): void {
  }

}
