import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userss, UsersService } from '../service/users.service';
@Component({
  selector: 'app-froms-a',
  templateUrl: './froms-a.component.html',
  styleUrls: ['./froms-a.component.css']
})
export class FromsAComponent implements OnInit {
  userForm: FormGroup =new FormGroup({}) ;
  constructor(public userservice:UsersService,private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.userForm = new FormGroup({
      id: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      gmail: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),

    })
  }
  onSubmitForm(){
    
    const User: Userss = this.userForm.value;


    this.userservice.addUser<Userss>(User).subscribe();
   
    
    this.router.navigate(['/loginRegister']);
    
  }
}
