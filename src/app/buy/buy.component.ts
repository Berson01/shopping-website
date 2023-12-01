import{HttpClient}from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder}from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  public buyForm!:FormGroup;
   constructor(private formBuilder : FormBuilder, private http:HttpClient, private router: Router){}
   ngOnInit(): void {
     this.buyForm=this.formBuilder.group({
      ShippingName:[''],
      ShippingAddress:[''],
      PaymentMethod:[''],
       
     })
   }
   confirm(){
     
     this.http.post<any>("http://localhost:3000/orderconfirm",this.buyForm.value)
     .subscribe(res=>{
       alert("Order Confirmed");
       this.buyForm.reset();
       this.router.navigate(['mobiles']);
     },err=>{
       alert("something went wrong")
     })
   } 
 
   cancel(){
    alert("Your Order Has Been Canceled")
   }

 }