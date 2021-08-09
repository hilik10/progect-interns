import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { FileUpload } from '../models/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class UploadNodeService {

  baceUrl = 'http://localhost:5000/upload/';

  constructor(public userservice:UsersService,private http: HttpClient) { }
  find<T>(data?:{ },headers?: object):Observable<T>{
    return this.http.post<T>(this.baceUrl +'find' , data,this.getOptions(headers))
  }

  saveFileData<T>(data?:{ },headers?: object):Observable<T>{
    
    console.log('save work', data, this.getOptions(headers));
    if(this.userservice.rolNumber==500){
    return this.http.post<T>(this.baceUrl +'crateTest' , data,this.getOptions(headers))
  }else{
    console.log("answer work");
    
    return this.http.post<T>(this.baceUrl +'crateAnswer' , data,this.getOptions(headers))
  }
  }
getName<T>(supervisor_id,headers?: object):Observable<T>{
  console.log("getnames");
  
return this.http.post<T>(this.baceUrl+'getname',{supervisor_id},this.getOptions(headers))
}
  getOptions(headers?: any) {
    headers = headers? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.userservice.token;
    return {
      headers: new HttpHeaders(headers)
    }
  }
  getFiles<T>(urlfile:string,supervisor_id:string,headers?: object):Observable<T>{
    console.log("getAll chel chilik");
   console.log(this.userservice.path);
   console.log(urlfile);
   
   
    return this.http.post<T>(this.baceUrl +this.userservice.path,{urlfile,supervisor_id},this.getOptions(headers) )
  }
  getListanswer<T>(user_id,headers?: object):Observable<T>{
    console.log(user_id);
    
    return this.http.post<T>(this.baceUrl+'getanswer',{user_id},this.getOptions(headers));
  }
  delete<T>(fileUpload: FileUpload,headers?: object){
return this.http.post<T>(this.baceUrl+'delete', fileUpload,this.getOptions(headers));
  }
}
