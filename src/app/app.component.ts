import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicBar';

  constructor(private logser:LoginService,private route:Router){}

  ngOnInit():void{}

  getHeader(){
    if(this.logser.getLoggedIn() === false && this.logser.getAdminLogin() === false){
      return true;
    }
    else{
      return false;
    }
  }

  getUserHeader(){
    if(this.logser.getLoggedIn()){
      return true;
    }
    else{
      return false;
    }
  }

  getAdminHeader(){
    if(this.logser.getAdminLogin()){
      return true;
    }
    else {
      return false;
    }
  }
}
