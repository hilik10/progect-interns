import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-intern',
  templateUrl: './comp-intern.component.html',
  styleUrls: ['./comp-intern.component.css']
})
export class CompInternComponent implements OnInit {
intern:string;
  constructor() { }

  ngOnInit(): void {
    this.intern="intern"
  }

}
