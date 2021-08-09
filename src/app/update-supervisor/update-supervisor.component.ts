import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userss, UsersService } from '../service/users.service';

@Component({
  selector: 'app-update-supervisor',
  templateUrl: './update-supervisor.component.html',
  styleUrls: ['./update-supervisor.component.css']
})
export class UpdateSupervisorComponent implements OnInit {
  userForm: FormGroup
  constructor(public userservice: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.userForm = new FormGroup({
     
      School: new FormControl("", Validators.required)


    })
  } 
  onSubmitForm() {
    const mor: Userss = this.userForm.value;
    mor.id=this.userservice.id;
mor.rolNumber=this.userservice.rolNumber;
mor.user=this.userservice._id;
    this.userservice.addmorSupervisor<Userss>(mor).subscribe(data => { console.log(data) });
   
      this.router.navigate(["/login"])
     
 
    
  }
}
