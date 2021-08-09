import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userss, UsersService } from '../service/users.service';

@Component({
  selector: 'app-login-regisret',
  templateUrl: './login-regisret.component.html',
  styleUrls: ['./login-regisret.component.css']
})
export class LoginRegisretComponent implements OnInit {
loginRegister:FormGroup;
  constructor(public userservice: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginRegister = new FormGroup({
     name: new FormControl("", Validators.required),
     password: new FormControl("", Validators.required)


    })
  }
  onSubmitForm(){
    const loginregister:Userss=this.loginRegister.value;
    this.userservice.loginRegister<Userss>(loginregister).subscribe (data => {
      this.userservice._id= data._id;
      this.userservice.token = data.token;
      this.userservice.id = data.id;
      this.userservice.name = data.name;
      this.userservice.rolNumber=data.rolNumber;
       console.log(data)
       });

    this.router.navigate(['welcome/update'])
  }
}
