import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = 'http://localhost:3000/posts'

  constructor(private http: HttpClient ) { }

  retriveAll(): Observable<post[]>{
    return this.http.get<post[]>(this.url);
  }

  save(post: post): Observable<post> {
    if(post.id){
      return this.http.put<post>(`${this.url}/${post.id}`, post);
    } else {
      return this.http.post<post>(`${this.url}`, post);
    }
  }

}
