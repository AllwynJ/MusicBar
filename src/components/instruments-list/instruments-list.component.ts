import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrument } from 'src/model/instrument.model';
import { InstrumentService } from 'src/service/instrument.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruments-list',
  templateUrl: './instruments-list.component.html',
  styleUrls: ['./instruments-list.component.css']
})
export class InstrumentsListComponent implements OnInit {

  instruments : any;
  displayStyleAdd: any;
  displayStyleUpdate: any;
  instrumentUpadate : Instrument = new Instrument();
  instrumentAdd : Instrument = new Instrument();
  toast: any;
  submitted = false;

  constructor(private route:Router,private inser:InstrumentService) { }

  ngOnInit(): void {
    this.getAllInstruments();
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


  getAllInstruments(){
    this.inser.getAllInstruments().subscribe((data)=>{
      console.log(data);
      this.instruments=data;
    })
  }

  public deleteInstrument(id:number){
    this.inser.deleteInstrument(id).subscribe((data)=>{
      console.log(data);
      this.getAllInstruments();
    });
 
   }
   
  updateInstrumentData(instrument:any){
    this.instrumentUpadate=instrument;
    this.getAllInstruments();
  }
  updateInstument()
  {
    this.inser.updateInstrument(this.instrumentUpadate).subscribe((data:any)=>
    {
      console.log(data);
      this.getAllInstruments();
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
    this.updateInstument();    
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
        this.deleteInstrument(id);
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


  addUser(instrumentAdd:any){
    this.instrumentAdd=instrumentAdd;
    this.inser.addInstrument(instrumentAdd).subscribe((data)=>{
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.closeAddModal(); 
      this.instrumentAdd=new Instrument();
      this.getAllInstruments();
      })
  }



}
