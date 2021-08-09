import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FileUpload } from 'src/app/models/file-upload.model';
import { FileUploadService } from 'src/app/service/upload.service';
import { UsersService } from 'src/app/service/users.service';
@Component({
  selector: 'app-upload-list',
  templateUrl:'./upload-list.component.html',
  styleUrls: ['./upload-list.component.css']
})
export class UploadListComponent implements OnInit {
  fileUploads: any[];
  @Input() level:string;
  urlfile:string;
  supervisor_id:string
  constructor(private uploadService: FileUploadService, private userService: UsersService) { }
 
  ngOnInit(): void {
    console.log(this.userService.token);
this.urlfile=this.userService.urlfile;
this.userService.path="/getall";
this.supervisor_id=this .userService.supervisor_id;
    this.uploadService.getListFileSubject(this.urlfile,this.supervisor_id).subscribe(data => {
      this.fileUploads = data;
    }, err => console.log("error getAll ", err)
    )
  }

}
