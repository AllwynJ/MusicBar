import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getAllCartDetails(){
    return this.http.get('/api/orders');
  }
  addToCart(data:any){
    return this.http.post('/api/orders',data);
  }
  updateCart(data:any){
    return this.http.put('/api/orders',data);
  }
  getCartItems(id:number){
    return this.http.get('/api/orders/'+id);
  }
  deleteCartItem(id:number){
    return this.http.delete('/api/orders/'+id);
  }
  getCartById(id:Number){
    return this.http.get('/api/ordersbyid/'+id);
  }

}