import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseUrl = 'http://localhost:4300/';

  constructor(private http: HttpClient) { }

  getComments(postID: number) : Observable<Comment[]>{
    return this.http.get<Comment[]>(this.baseUrl + "api/comments/" + postID);
  }

  createComment(comment: Comment) : Observable<Comment>{
    return this.http.post<Comment>(this.baseUrl + "api/comments/create", comment);
  }

}
