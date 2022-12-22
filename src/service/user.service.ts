import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get('/api/users');
  }
  getUsersById(id:Number){
    return this.http.get('/api/users'+id);
  }
  addUser(data:any){
    return this.http.post('/api/users',data);
  }
  updateUser(data:any){
    return this.http.put('/api/users',data);
  }
  deleteUser(id:Number){
    return this.http.delete('/api/users/'+id);
  }

}
