import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  [x: string]: any;
level:boolean=true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clickIntern(){
this.level=true;
  }
click(){
this.level=false;


}
}
