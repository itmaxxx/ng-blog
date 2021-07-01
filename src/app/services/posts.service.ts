import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl = 'http://localhost:4300/';

  constructor(private http: HttpClient) { }

  posts: Post[] = [];

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl + "api/posts");
  }

  searchPost(query: string) : Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl + "api/posts?search=" + query);
  }

  getPost(id: number) : Observable<Post>{
    return this.http.get<Post>(this.baseUrl + "api/post/" + id);
  }
  
}
