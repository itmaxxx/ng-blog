import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../models/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment = new Comment();
  formattedDate: string = '';

  constructor() { }

  ngOnInit(): void {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    this.formattedDate = new Date(this.comment.date).toLocaleDateString('en-UK', options);
  }

}
