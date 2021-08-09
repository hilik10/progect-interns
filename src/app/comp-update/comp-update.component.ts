import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-comp-update',
  templateUrl: './comp-update.component.html',
  styleUrls: ['./comp-update.component.css']
})
export class CompUpdateComponent implements OnInit {

  constructor(private router: Router,private usersService:UsersService) { }

  ngOnInit(): void {
  }
  routerUpdate(){
    if(this.usersService.rolNumber==500){
      this.router.navigate(["/supervisorUpdate"])
     }else{
      this.router.navigate(["/update"])
     }
  }
  // routerLink(){
  //  if(this.usersService.rolNumber==500){
  //   this.router.navigate(["/welcome/upload"])
  //  }else{
  //   this.router.navigate(["/welcome/intern"])
  //  }
  // }
}
