import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/file-upload.model';
import { FileUploadService } from 'src/app/service/upload.service';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  @Input() level:string;
  constructor(private uploadService:FileUploadService,private router: Router,
    private usersService:UsersService) { }

  ngOnInit(): void {
  }
  selectFile(event): void {
    this.selectedFiles = event.target.files; 
  }
  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.usersService.urlfile,this.currentFileUpload).subscribe(
      percentage => {
        console.log("yes");
        
        this.percentage = Math.round(percentage);
      },  
      error => {
        console.log("yes");

        console.log(error);
      }
    );
  }


  interns(){
    console.log("interns");
    this.router.navigate (["/testUsers"])
  }
}
