import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post";
import {PostsService} from "../services/posts.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {

  }

  validate(post: Post) {
    const minLength = 4;

    if (post.title.length > minLength &&
        post.picture.length > minLength &&
        post.text.length > minLength) {
      return true;
    } else {
      return false;
    }
  }

  createPost(e: any) {
    e.preventDefault();

    const title = (document.getElementById('postTitle') as HTMLInputElement).value.trim();
    const picture = (document.getElementById('postPicture') as HTMLInputElement).value.trim();
    const text = (document.getElementById('postText') as HTMLInputElement).value.trim();
    const authorUsername = (document.getElementById('postAuthorUsername') as HTMLInputElement).value.trim();
    const post = new Post(title, picture, text, authorUsername);

    if (!this.validate(post)) {
      alert('Some of the fields are empty or less than 3 symbols');

      return;
    }

    this.postsService.createPost(post).subscribe(res => {
      this.router.navigate([`/post/${res.id}`]);
    });
  }

}
