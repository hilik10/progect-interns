import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from '../models/file-upload.model';
import { FileUploadService } from '../service/upload.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-intern-upload',
  templateUrl: './intern-upload.component.html',
  styleUrls: ['./intern-upload.component.css']
})
export class InternUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  @Input() fileUpload: any;
 
  constructor(private uploadService:FileUploadService,private usersService:UsersService) { }

  ngOnInit(): void {
  
  }
 

}
