import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CommentsService} from "../services/comments.service";
import {Comment} from "../models/comment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  @Input() postID: number = -1;
  @Output() loadComments = new EventEmitter();

  constructor(private commentsService: CommentsService, private router: Router) { }

  ngOnInit(): void {
  }

  validate(comment: Comment) {
    const minLength = 4;

    if (comment.text.length < minLength) {
      return false;
    } else {
      return true;
    }
  }

  createComment(e: any) {
    e.preventDefault();

    const text = (document.getElementById('commentText') as HTMLInputElement).value.trim();
    const authorUsername = (document.getElementById('commentAuthorUsername') as HTMLInputElement).value.trim();
    const comment = new Comment(text, this.postID, authorUsername);

    if (!this.validate(comment)) {
      alert('Some of the fields are empty or less than 3 symbols');

      return;
    }

    this.commentsService.createComment(comment).subscribe(comment => {
      (document.getElementById('commentText') as HTMLInputElement).value = '';
      (document.getElementById('commentAuthorUsername') as HTMLInputElement).value = '';

      this.loadComments.emit();
    });
  }

}
