import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { BehaviorSubject, observable, Observable, pipe } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { FileUpload } from '../models/file-upload.model';
import { UploadNodeService } from './upload-node.service';
import { Userss, UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  fileUrl: string;
  usersName: any[];

  constructor(private usersService: UsersService, private UploadNodeService: UploadNodeService, private storage: AngularFireStorage) { }

  pushFileToStorage(fileUrl: string, fileUpload: FileUpload): Observable<number> {

    this.fileUrl = fileUrl;

    const filePath = `${fileUrl}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);

    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    let simpleObservable = new Observable<number>(observer => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
console.log("הקובץ כבר קיים");

      }, error => {


        fileUpload.name = fileUpload.file.name;
        fileUpload.intern_id=this.usersService._id
        this.UploadNodeService.find<FileUpload>({ fileUrl, ...fileUpload }).subscribe(() => {
          uploadTask.snapshotChanges()
            .pipe(finalize(() => {
              storageRef.getDownloadURL().subscribe(url => {
                fileUpload.url = url;
                fileUpload._id=this.usersService._id;
                fileUpload.supervisor_id=this.usersService.supervisor_id;
                console.log(this.usersService._id);
                
                this.saveFileData<FileUpload>(fileUrl, fileUpload).subscribe()
              })
            })).subscribe();
          uploadTask.percentageChanges().subscribe(percentage => {
            observer.next(percentage)
          }, error => {
            observer.error(error);
          });
        }, err => {
          console.error({ err });
        })









      })

    })
    return simpleObservable;


  }
  private saveFileData<T>(fileUrl: string, fileUpload: FileUpload): Observable<T> {
    console.log('save file data 42');

    return this.UploadNodeService.saveFileData<T>({ fileUrl, ...fileUpload }).pipe(finalize(
      () => {

        this.getFiles(this.usersService.urlfile,this.usersService.supervisor_id)
        console.log(this.usersService.urlfile);
        console.log(this.usersService.name);
        console.log(fileUpload.intern_id);
        
      }));

  }

  listTest$: BehaviorSubject<FileUpload[]> = new BehaviorSubject<FileUpload[]>([]);

  getFiles(urlfile: string,supervisor_id:string): void {
    this.UploadNodeService.getFiles<FileUpload[]>(urlfile,supervisor_id).subscribe
      (data => this.listTest$.next(data))
  }

  getListFileSubject(urlfile: string,supervisor_id:string): Observable<FileUpload[]> {
    console.log(urlfile);
    console.log(supervisor_id);

    this.getFiles(urlfile,supervisor_id);
    return this.listTest$;
  }
  getListanswer(user_id):Observable<any[]>{
   return this.UploadNodeService.getListanswer<any>(user_id)
  }

  deleteFile<T>(fileUpload: FileUpload): void {
    console.log("del");

    this.deleteFileDatabase<T>(fileUpload)

    this.deleteFileStorage(fileUpload.name);

  }

  private deleteFileDatabase<T>(fileUpload: FileUpload) {


    this.UploadNodeService.delete<T>(fileUpload).subscribe(data => {this.getFiles
      (this.usersService.urlfile,this.usersService.supervisor_id);console.log(this.usersService.urlfile)})
   

  }

  private deleteFileStorage(name: string): void {
console.log(this.fileUrl);


    const storageRef = this.storage.ref(this.fileUrl);
    storageRef.child(name).delete();
  }
  getname(supervisor_id): Observable<Userss[]> {
    console.log("getname");

    return this.UploadNodeService.getName<Userss[]>(supervisor_id)


  }

}