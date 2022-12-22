import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  buttonColor="black"; buttonType="Buy";
  isCustomSize=250;
  buttonHeight=50;
  isTop=window===window.top;
  paymentRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[{
      type:"CARD",
      parameters:{
        allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
        allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
      },
      tokenizationSpecification:{
        type:"PAYMENT_GATEWAY",
        parameters:{
          gateway:"example",
          gatewayMerchantId :"exampleGatewayMerchantId"
        }
      }
    }],
    merchantInfo:{
      merchantId:"12345678901234567890",
      mechantName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPrice:"100.00",
      currencyCode:"USD",
      countryCode:"US",

    }
      
    
  };
  onLoadPaymentData(event:any){
    console.log("Load Payment Data ",event.detail)

  }
   event:any;
  constructor(private carser:CartService,private logser:LoginService) { }

  carts:any;
  uId:any;

  ngOnInit(): void {
    this.uId=this.logser.getUserid();
    this.getCartById(this.uId);
  }
  getCartById(id:any){
    this.carser.getCartById(id).subscribe((data)=>{
      this.carts=data;
      console.log("list of carts"+data)
    })
  }
  payment1(){

    alert("Payment Successful");
    alert("order confirmed");
  }
}
