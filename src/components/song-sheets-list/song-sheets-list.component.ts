import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongSheet } from 'src/model/song-sheet';
import { SongsheetService } from 'src/service/songsheet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-song-sheets-list',
  templateUrl: './song-sheets-list.component.html',
  styleUrls: ['./song-sheets-list.component.css']
})
export class SongSheetsListComponent implements OnInit {

  songsheets : any;
  displayStyleAdd: any;
  displayStyleUpdate: any;
  songsheetUpadate : SongSheet = new SongSheet();
  songsheetAdd : SongSheet = new SongSheet();
  
  toast: any;
  submitted = false;

  constructor(private route:Router,private ssser:SongsheetService) { }

  ngOnInit(): void {
    this.getAllSongSheets();
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


  getAllSongSheets(){
    this.ssser.getAllSongSheets().subscribe((data: any)=>{
      console.log(data);
      this.songsheets=data;
    })
  }

  public deleteSongSheet(id:number){
    this.ssser.deleteSongSheet(id).subscribe((data: any)=>{
      console.log(data);
      this.getAllSongSheets();
    });
 
   }
   
  updateSongSheetData(songsheets:any){
    this.songsheetUpadate=songsheets;
    this.getAllSongSheets();
  }
  updateSongSheet()
  {
    this.ssser.updateSongSheet(this.songsheetUpadate).subscribe((data:any)=>
    {
      console.log(data);
      this.getAllSongSheets();
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
    this.updateSongSheet();    
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
        this.deleteSongSheet(id);
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


  addUser(songsheetAdd:any){
    this.songsheetAdd.sId=1;
    this.songsheetAdd=songsheetAdd;
    this.ssser.addSongSheet(songsheetAdd).subscribe((data: any)=>{
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.closeAddModal(); 
      this.songsheetAdd=new songsheetAdd();
      this.getAllSongSheets();
      })
  }



}
