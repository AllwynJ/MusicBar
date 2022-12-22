import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn:boolean = false;
  userid:any;
  adminLogin:boolean = false;

  constructor(private http:HttpClient) { 
    this.loggedIn = false;
    this.adminLogin = false;
   }
  setLoggedIn(){
    this.loggedIn = true;
  }
  getLoggedIn(){
    return this.loggedIn;
  }
  logout(){
    this.loggedIn = false;
  }
  setUserid(uid:any){
    this.userid = uid;
  }
  getUserid(){
    return this.userid;
  }
  setAdminLogin(){
    this.adminLogin = true;
  }
  getAdminLogin(){
    return this.adminLogin;
  }
  adminLogout(){
   this.adminLogin = false;
  }
}
