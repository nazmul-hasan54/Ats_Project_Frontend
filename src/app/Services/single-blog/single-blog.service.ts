import { Injectable } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleBlogService {

  constructor( private _http: HttpClient) { }

  getBlogById(id: number){
    return this._http.get("https://localhost:7295/api/Blogs/get-by-id/"+id);
  }

  addBlogPost(model: any){
    return this._http.post("https://localhost:7295/api/Blogs/add-blog",model);
  }
}
