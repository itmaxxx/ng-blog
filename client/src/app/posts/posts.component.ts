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

  loadPosts(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts
    });
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  handleSubmit(e: any): void {
    e.preventDefault();

    this.search();
  }

  search(): void {
    const searchQuery = document.getElementById('search-query') as HTMLInputElement;
    const query = searchQuery.value.trim();

    if (query.length > 0) {
      console.log(query);
      // TODO: get articels by query

      this.postsService.searchPost(query).subscribe(posts => {
        this.posts = posts
      });
    } else {
      this.loadPosts();
    }
  }

}
