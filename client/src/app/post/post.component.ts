import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post = new Post();

  formattedDate: string = '';

  constructor() { }

  ngOnInit(): void {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    this.formattedDate = new Date(this.post.date).toLocaleDateString('en-UK', options);
  }

}
