import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private http:HttpClient) { }

  getAllTutors(){
    return this.http.get('/api/tutor');
  }
  getTutorById(id:Number){
    return this.http.get('/api/tutor'+id);
  }
  addTutor(data:any){
    return this.http.post('/api/tutor',data);
  }
  updateTutor(data:any){
    return this.http.put('/api/tutor',data);
  }
  deleteTutor(id:Number){
    return this.http.delete('/api/tutor/'+id);
  }
}
