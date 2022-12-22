import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsheetService {

  constructor(private http:HttpClient) {

  }
  getAllSongSheets(){
   return this.http.get('/api/songsheets');
 }
 getSongSheetById(id:Number){
   return this.http.get('/api/songsheets'+id);
 }
 addSongSheet(data:any){
   return this.http.post('/api/songsheets',data);
 }
 updateSongSheet(data:any){
   return this.http.put('/api/songsheets',data);
 }
 deleteSongSheet(id:Number){
   return this.http.delete('/api/songsheets/'+id);
  }

}
