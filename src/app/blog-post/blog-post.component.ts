import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private router: Router, private postsService: PostsService) { }

  id: number = 0;

  post: Post = new Post();
  formattedDate: string = '';

  ngOnInit(): void {
    let n = this.router.url.lastIndexOf('/');
    this.id = parseInt(this.router.url.substring(n + 1));

    this.postsService.getPost(this.id).subscribe(post => {
      this.post = post
    });

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    this.formattedDate = new Date(this.post.date).toLocaleDateString('en-UK', options);
  }

}
