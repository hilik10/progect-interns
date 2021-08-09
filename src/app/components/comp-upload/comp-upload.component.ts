import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-upload',
  templateUrl: './comp-upload.component.html',
  styleUrls: ['./comp-upload.component.css']
})
export class CompUploadComponent implements OnInit {
admin:string;
  constructor() { }

  ngOnInit(): void {
    this.admin="admin"
  }

}
