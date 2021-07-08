import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../models/comment";
import {CommentsService} from "../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() postID: number = -1;

  constructor(private commentsService: CommentsService) { }

  comments: Comment[] = [];

  loadComments(): void {
    this.commentsService.getComments(this.postID).subscribe(comments => {
      this.comments = Object.assign(comments, null);
    });
  }

  updateComments(): void {
    this.loadComments();
  }

  ngOnInit(): void {
    this.loadComments();
  }

}
