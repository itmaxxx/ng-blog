import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-related-post',
  templateUrl: './related-post.component.html',
  styleUrls: ['./related-post.component.css']
})
export class RelatedPostComponent implements OnInit {

  @Input() post: Post = new Post();

  formattedDate: string = '';

  constructor() { }

  ngOnInit(): void {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

    this.formattedDate = new Date(this.post.date).toLocaleDateString('en-UK', options);
  }

}
