import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from './IPost'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient){}

  getData(): Observable<Post[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Post[]>(url);
  }

}
