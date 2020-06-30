import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { User } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="/users";

  constructor(private apiService:ApiService) { }


  getUsers():Observable<User[]>{
    return this.apiService.get(this.baseUrl);
  }

  getUser(id:number):Observable<User>{
    return this.apiService.get(`${this.baseUrl}/${id}`);
  }

  deleteUser(id:number):Observable<any>{
    return this.apiService.delete(`${this.baseUrl}/${id}`);
  }

  addUser(user:any):Observable<any>{
       return this.apiService.post(`${this.baseUrl}/`,user);
  }

  update(user:any){
      return this.apiService.put(`${this.baseUrl}/`,user);
  }
}
