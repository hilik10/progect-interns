import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/models/file-upload.model';
import { FileUploadService } from 'src/app/service/upload.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-test-users',
  templateUrl: './test-users.component.html',
  styleUrls: ['./test-users.component.css']
})
export class TestUsersComponent implements OnInit {
 usersname :any [];
 fileUploads: any[];
 selectedFiles: FileList;
 currentFileUpload: FileUpload;
 percentage: number;
  constructor(private uploadService: FileUploadService, private userService: UsersService) {
   }
  
  ngOnInit(): void {
    this.nameUsers()
  } 
  selectFile(event): void {
    this.selectedFiles = event.target.files; 
  }
nameUsers(){
this.uploadService.getname(this.userService.supervisor_id)
  .subscribe(data=> {
      this.usersname =data;
        console.log(data)});
} 
getAnswer(user_id:string){
  console.log(user_id);
  
 
  this.uploadService.getListanswer(user_id).subscribe(data => {
    this.fileUploads = data;
     
  }, err => console.log("error getAll ", err)
  )
  
}
upload(): void {
  const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;

  this.currentFileUpload = new FileUpload(file);
  this.uploadService.pushFileToStorage(this.userService.urlfile,this.currentFileUpload).subscribe(
    percentage => {
      this.percentage = Math.round(percentage);
    }, 
    error => {
      console.log(error);
    }
  );
}
}
