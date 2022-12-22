import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user.model';
import { LoginService } from 'src/service/login.service';
import { UserService } from 'src/service/user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:any;
  userPwd:any;
  userType:any;
  user:any;
  flag:any;
  userNames: Array<any> = [];
  userPwds: Array<any> = [];
  userTypes: Array<any> =[];
  userIds: Array<any> =[];
  userPids: Array<any> = [];
  userId:any;
  userPid:any;
  displayStyleAdd: any;
  displayStyleUpdate: any;

  userAdd:User=new User();

  constructor(private route:Router,private userser:UserService,private logser:LoginService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  openAddModal() {
    this.displayStyleAdd = "block";
  }
  closeAddModal() {
    this.displayStyleAdd = "none";
  }


  getAllUsers(){
    this.userser.getAllUsers().subscribe((data:any)=>{
      for(let d of data){
        this.userNames.push(d.uName);
        this.userPwds.push(d.uPassword);
        this.userTypes.push(d.uType);
        this.userIds.push(d.uId);
      }
      this.user=data;
    })
  }
  login(loginForm:any)
    {
      this.flag=true;
      for(let i=0;i<this.userNames.length;i++){
        console.log(loginForm.userName+''+loginForm.userPwd);
        if(loginForm.userName==this.userNames[i] && loginForm.userPwd==this.userPwds[i]){
          if(this.userTypes[i]=='Admin'){
            Swal.fire({
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            this.logser.setAdminLogin();
            this.route.navigate(['admin-header']);
          }
          else if(this.userTypes[i]=='User'){
            Swal.fire({
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          this.userId=this.userIds[i];
          this.logser.setLoggedIn();
          this.logser.setUserid(this.userId);
          this.route.navigate(['user-header']);
          }
          break;
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Pls Register',
            showConfirmButton: false,
            timer: 1500
          })
            this.flag=false;
        }
      }
      if(this.flag){

        this.route.navigate(['/']);
      }
    }
    register(){
      // this.route.navigate(['register']);
      this.openAddModal();
    }



    addUser(userAdd:any){
      this.userAdd=userAdd;
      this.userAdd.uType="User";
      this.userser.addUser(userAdd).subscribe((data)=>{
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.closeAddModal();
        this.userAdd=new User();
        this.getAllUsers();
      })
    }
}



