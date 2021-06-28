import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  posts: Post[] = [];

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts
    });
  }

}
