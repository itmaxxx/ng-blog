import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

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

      // this.articleService.getArticles().subscribe(articles => {
      //   this.articles = articles.filter(a => {
      //     return a.title.toLowerCase().includes(text.toLowerCase());
      //   })
      // })
    }else {
      // TODO: get all articles

      // this.articleService.getArticles().subscribe(articles => this.articles = articles);
    }
  }

  ngOnInit(): void {
  }

}
