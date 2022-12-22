import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutor } from 'src/model/tutor.model';
import { TutorService } from 'src/service/tutor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tutors-list',
  templateUrl: './tutors-list.component.html',
  styleUrls: ['./tutors-list.component.css']
})
export class TutorsListComponent implements OnInit {

  tutors : any;
  displayStyleAdd: any;
  displayStyleUpdate: any;
  tutorUpadate : Tutor = new Tutor();
  tutorAdd : Tutor = new Tutor();
  toast: any;
  submitted = false;

  constructor(private route:Router,private turser:TutorService) { }

  ngOnInit(): void {
    this.getAllTutors();
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


  getAllTutors(){
    this.turser.getAllTutors().subscribe((data)=>{
      console.log(data);
      this.tutors=data;
    })
  }

  public deleteTutor(id:number){
    this.turser.deleteTutor(id).subscribe((data)=>{
      console.log(data);
      this.getAllTutors();
    });
 
   }
   
  updateTutorData(tutor:any){
    this.tutorUpadate=tutor;
    this.getAllTutors();
  }
  updateTutor()
  {
    this.turser.updateTutor(this.tutorUpadate).subscribe((data:any)=>
    {
      console.log(data);
      this.getAllTutors();
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
    this.updateTutor();    
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
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.deleteTutor(id);
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your data has been deleted.',
          showConfirmButton: false,
          timer: 1500
      })
      }
    })
  }


  addUser(tutorAdd:any){
    this.tutorAdd=tutorAdd;
    this.turser.addTutor(tutorAdd).subscribe((data)=>{
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.closeAddModal(); 
      this.tutorAdd=new Tutor();
      this.getAllTutors();
      })
  }


}
