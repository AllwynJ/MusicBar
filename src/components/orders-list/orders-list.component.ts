import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  carts:any;
  
  constructor(private cartser:CartService) { }

  ngOnInit(): void {
    this.getAllCartDetails()
  }
  getAllCartDetails(){
    this.cartser.getAllCartDetails().subscribe((data)=>{
      this.carts=data;
    })
  }

}
