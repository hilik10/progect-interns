import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { settingForm } from '../settingsForm';
import { SettingsInput } from '../settingsInput';
import { Userss, UsersService } from '../../../service/users.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  settingsForm: settingForm<any>;
  name: SettingsInput;
  password: SettingsInput;
  nameLogin: String;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private UsersService: UsersService) {

    this.name = {
      name: 'name',
      type: 'text',
      readonly: false,
    }
    this.password = {
      name: 'password',
      type: 'password',
      readonly: false,
    }
    this.settingsForm = new settingForm({ name: '', password: '' });
    this.settingsForm.settingButton = {};
    this.settingsForm.settingInputs = [this.name, this.password];

  }

  ngOnInit(): void {
  }
  login(event) {
  
    this.UsersService.loginuser<Userss>(event).subscribe(data => {

  this.UsersService._id= data._id;
  this.UsersService.token = data.token;
  this.UsersService.id = data.id;
  this.UsersService.name = data.name;
  this.UsersService.rolNumber=data.rolNumber;
  console.log(data.supervisor_id);
 
  
      this.UsersService.supervisor_id=data.supervisor_id;

      if(data.rolNumber==500){
this.UsersService.urlfile='uploads'
      }else{
      this.UsersService.urlfile= data.name;
    }
      console.log(data);

      this.router.navigate(['welcome/code']);

    })
  }
}
