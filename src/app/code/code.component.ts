import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  UsersService } from '../service/users.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  name:String;
  num1: number;
  num2: number;
  num3: number;
  num4: number;

  input1: number;
  input2: number;
  input3: number;
  input4: number;

  constructor( private router: Router,
    private usersService:UsersService) {
     this.name= usersService.name;
   this.num1=1;
   this.num2=2;
   this.num3=3;
   this.num4=4;
  }

  ngOnInit(): void {

  }
  onDigitInput(event: any) {

    let element;
    if (event.code !== 'Backspace' && ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)))
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null)
      return;
    else
      element.focus();
  }
  onSubmit() {
    if(this.num1==this.input1&&
      this.num2==this.input2&&
      this.num3==this.input3&&
      this.num4==this.input4){
console.log(this.usersService.rolNumber);

        if(this.usersService.rolNumber==500){
            this.router.navigate(["/welcome/upload"])
           }else{
            this.router.navigate(["/welcome/intern"])
           }
    
  }
  }
 
    

   
}
