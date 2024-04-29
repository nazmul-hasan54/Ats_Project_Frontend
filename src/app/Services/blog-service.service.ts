import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private _http: HttpClient) { }

  getAllBlogs(){
    return this._http.get("https://localhost:7295/api/Blogs/get-all-blogs");
  }
}
