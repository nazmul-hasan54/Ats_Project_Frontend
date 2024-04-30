import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  getAllCategory(){
    return this._http.get("https://localhost:7295/api/Category/get-all-category");
  }
}
