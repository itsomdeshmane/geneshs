import { Component, inject } from '@angular/core';
import { Form } from '@angular/forms';
import {CommonModule, CurrencyPipe} from "@angular/common";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ CommonModule,HttpClientModule,],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  usersDetails:any=[];
  // usersDetails = [
  //   {srno:1,name :'rushi',email:'rushi@.com',phone:'1111'},
  //   {srno:2,name :'ganesh',email:'ganesh@.com',phone:'1111'},
  //   {srno:3,name :'mahesh',email:'mahesh@.com',phone:'1111'},
  //   {srno:4,name :'amol',email:'amol@.com',phone:'1111'},
  //   {srno:5,name :'peter',email:'peter@.com',phone:'1111'}
  // ]
  constructor(private http:HttpClient,private router:Router){
    this.getEmployeeData();
  }

  getEmployeeData(){
    this.http.get("https://gorest.co.in/public/v2/users").subscribe(data=>{
      this.usersDetails = data;
    })
  }
  getEmp(){
    this.router.navigate(['/user'])
  }
}
