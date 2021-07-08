import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private baseUrl = 'http://localhost:4300/';

  constructor(private http: HttpClient) { }

  getAuthor(username: string) : Observable<Author>{
    return this.http.get<Author>(environment.apiURL + "api/authors/" + username);
  }
}
