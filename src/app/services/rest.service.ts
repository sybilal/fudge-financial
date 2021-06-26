import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(
        private http: HttpClient,
    ) { }

    getUsers() {
        return this.http.get('users');
    }

    getComments() {
        return this.http.get('posts/1/comments');
    }
    getPosts() {
        return this.http.get('users/1/posts');
    }

}
