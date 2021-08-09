import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userss, UsersService } from '../service/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userForm: FormGroup;
  constructor(public userservice: UsersService, private router: Router) { }
 
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.userForm = new FormGroup({
      city: new FormControl("", Validators.required),
      School: new FormControl("", Validators.required)


    })
  }
  onSubmitForm() {
    const mor: Userss = this.userForm.value;
    mor.id=this.userservice.id;
mor.rolNumber=this.userservice.rolNumber;
mor.user=this.userservice._id
    this.userservice.addmor<Userss>(mor).subscribe(data => { console.log(data) });
  
      this.router.navigate(["/login"])
     
 
    
  }
}
