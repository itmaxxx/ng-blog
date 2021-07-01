import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../models/author';
import { AuthorsService } from '../services/authors.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {

  constructor(private router: Router, private authorsService: AuthorsService) { }

  username: string = '';

  author: Author = new Author();

  ngOnInit(): void {
    let n = this.router.url.lastIndexOf('/');
    this.username = this.router.url.substring(n + 1);

    this.authorsService.getAuthor(this.username).subscribe(author => {
      this.author = author
    });
  }

}
