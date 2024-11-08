import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import {MatTableModule} from '@angular/material/table';
import { Post } from '../../service/IPost';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, MatTableModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  public postData!: Observable<Post[]>;

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  constructor(private postSvc: PostService){ }

  ngOnInit(): void {
    this.postData = this.postSvc.getData();
  }
}
