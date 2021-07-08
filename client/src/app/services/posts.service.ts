import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(environment.apiURL + "api/posts");
  }

  getRelatedPosts(id: number) : Observable<Post[]>{
    return this.http.get<Post[]>(environment.apiURL + "api/related-posts/" + id);
  }

  searchPost(query: string) : Observable<Post[]>{
    return this.http.get<Post[]>(environment.apiURL + "api/posts?search=" + query);
  }

  getPost(id: number) : Observable<Post>{
    return this.http.get<Post>(environment.apiURL + "api/posts/" + id);
  }

  createPost(post: Post) : Observable<Post>{
    return this.http.post<Post>(environment.apiURL + "api/posts/create", post);
  }

}
