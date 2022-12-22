import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  width:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.route.navigate(['home-page']);
  }
  login(){
    this.route.navigate(['login']);
  }

}
