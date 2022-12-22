import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

    constructor(private route:Router,private logser:LoginService) { }
  
    ngOnInit(): void {
    }
    allUsers(){
      this.route.navigate(['users-list']);
    }
    allTutors(){
      this.route.navigate(['tutors-list']);
    }
    allInstuments(){
      this.route.navigate(['instruments-list']);
    }
    allOrders(){
      this.route.navigate(['orders-list']);
    }
    allSongSheets(){
      this.route.navigate(['song-sheets-list']);
    }
    logout(){
      this.logser.logout();
    }

}
