import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostList, Post } from './post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching: boolean = false

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts()
    console.log(this.loadedPosts)
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post<Post>('http://127.0.0.1:8001/api/content/', postData)
      .subscribe(response => this.loadedPosts.push({...response})
      )
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts()
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true
    this.http.get<PostList>('http://127.0.0.1:8001/api/content/')
      .subscribe(response => {
        this.isFetching = false
        this.loadedPosts = response.results
      })
  }
}
