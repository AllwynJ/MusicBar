import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user.model';
import { UserService } from 'src/service/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users : any;
  displayStyleAdd: any;
  displayStyleUpdate: any;
  userAdd : User = new User();
  userUpdate : User = new User(); 
  toast: any;
  submitted = false;

  constructor(private route:Router,private userser:UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  

  openUpdateModal() {
    this.displayStyleUpdate = "block";
  }
  closeUpdateModal() {
    this.displayStyleUpdate = "none";
  }

  openAddModal() {
    this.displayStyleAdd = "block";
  }
  closeAddModal() {
    this.displayStyleAdd = "none";
  }


  getAllUsers(){
    this.userser.getAllUsers().subscribe((data)=>{
      console.log(data);
      this.users=data;
    })
  }

  public deleteUser(id:number){
    this.userser.deleteUser(id).subscribe((data)=>{
      console.log(data);
      this.getAllUsers();
    });
 
   }
   
  updateUserData(user:any){
    this.userUpdate=user;
    this.getAllUsers();
    
  }
  updateUser()
  {
    this.userser.updateUser(this.userUpdate).subscribe((data:any)=>
    {
      console.log(data);
      this.getAllUsers();
    });
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    this.closeUpdateModal();
  }
  onSubmit() {
    this.submitted = true;
    this.updateUser();    
  }

  onDelete(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUser(id);
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your data has been deleted.',
          showConfirmButton: false,
          timer: 1500
      });
      }
    });
  }

  addUser(userAdd:any){
    this.userAdd=userAdd;
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


