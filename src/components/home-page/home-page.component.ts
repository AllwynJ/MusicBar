import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notyf } from 'notyf';
import { Cart } from 'src/model/cart';
import { Instrument } from 'src/model/instrument.model';
import { CartService } from 'src/service/cart.service';
import { InstrumentService } from 'src/service/instrument.service';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  carts:any;
  cart:Cart=new Cart();
  instruments :any;
  userId:any;
  notyf = new Notyf();
  count:any;
  constructor(private route:Router,private insser:InstrumentService,private cartser:CartService,private logser:LoginService) { }

  ngOnInit(): void {
    this.displayAllProducts();
    this.userId=this.logser.getUserid();
    this.getAllCarts();
  }

  getAllCarts(){
    this.cartser.getAllCartDetails().subscribe((data:any)=>{
      console.log(data);
    })
  }

  displayAllProducts(){
    this.insser.getAllInstruments().subscribe((data:any)=>{
      this.instruments=data;
    });
  }

  addToCart(){
    this.cartser.addToCart(this.cart).subscribe((data)=>{
      this.instruments=data;
      this.showToastr();
    })
  }
  goToUserCart(inId:number){
    
    if(this.logser.getLoggedIn()){
          this.cart.inId = inId;
          this.cart.uId = this.userId;
          console.log(this.cart);
          this.cartser.addToCart(this.cart).subscribe((data)=>
          {
            this.carts=data;
          });
          this.showToastr();
       }
    else {
      this.route.navigate(['login']);
    }
  }
  GoToPaymentPage(instrument:Instrument){
    if(this.logser.getLoggedIn()){
      this.route.navigate(['payment']);
    }
    else{
      this.route.navigate(['login']);
    }
    
  }
  showToastr(){
    this.notyf.success('Your changes have been successfully saved!');
  }
  
}
