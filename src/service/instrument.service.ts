import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor(private http:HttpClient) { }

  getAllInstruments(){
    return this.http.get('/api/instruments');
  }
  getInstrumentById(id:Number){
    return this.http.get('/api/instruments/'+id);
  }
  addInstrument(data:any){
    return this.http.post('/api/instruments',data)
  }
  updateInstrument(data:any){
    return this.http.put('/api/instruments',data);
  }
  deleteInstrument(id:Number){
    return this.http.delete('/api/instruments/'+id);
  }
}