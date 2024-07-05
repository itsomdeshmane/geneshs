import { Component } from '@angular/core';
import { form } from '../test';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Countries } from '../Countries';
import { __values } from 'tslib';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  router: any;

  employee:form={title:'',lastname:'',user:'',age:'',address:'',email:'',password:'',}
  getValues(value:any){
    this.formList.push(value);
    console.log(this.formList);
    this.employee=value;
    
  }

  formList:Array<form>=[];
  constructor(private location:Location){}
  getUser():void{
    this.location.back()
    
  }
  
  countryinfo=[
    {id:'',name:'',},
    {id:'',name:'',},
    {id:'',name:'',},
    {id:'',name:'',},
    {id:'',name:'',},
  
  ]
 
  country: Countries = {
    id: 1,
    name: "USA",

}
statesinfo=[
  {id:'',name:'',}
]


}
