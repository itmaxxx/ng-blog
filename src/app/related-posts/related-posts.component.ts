import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrls: ['./related-posts.component.css']
})
export class RelatedPostsComponent implements OnInit {

  @Input() id: number = 0;

  constructor(private postsService: PostsService) { }

  relatedPosts: Post[] = [];

  ngOnInit(): void {
    this.postsService.getRelatedPosts(this.id).subscribe(relatedPosts => {
      this.relatedPosts = relatedPosts
    });
  }

}
