import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  userRegistration(model: any){
    return this._http.post("https://localhost:7295/api/Users/add-user", model);
  }

  userLogin(model: any){
    return this._http.post("https://localhost:7295/api/Users/user-login", model);
  }

  getUserById(id: number){
    return this._http.get("https://localhost:7295/api/Users/get-user-by-id/"+id);
  }
}
