import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private route:Router,private logser:LoginService) { }
  
  ngOnInit(): void {
    this.route.navigate(['home-page'])
  }
  allUsers(){
    this.route.navigate(['users-list']);
  }
  register(){
    this.route.navigate(['register']);
  }
  allInstuments(){
    this.route.navigate(['instruments-list']);
  }
  logout(){
    this.logser.logout();
  }
}
