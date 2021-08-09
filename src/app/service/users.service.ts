import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _id:string;
  id: String;
  name: string;
 rolNumber:number;
 urlfile:string;
  token: String = '';
  path:string;
  supervisor_id:string;

  baceUrl = 'http://localhost:5000/';
  //    המערך  יוזארס וההפונקצייה אדדיוזאר לסרוויס
  public Users: Userss[] = [];

  constructor(private http: HttpClient) { }

  addUser<T>(user: Userss):Observable<T> {
    
    this.Users = [...this.Users, user];
    return this.http.post<T>(this.baceUrl +'auth/create',user)
 
  }
  loginuser<T>( data?: { }): Observable<T> {
    return this.http.post<T>(this.baceUrl +'auth/login' , data)
  
  }
  loginRegister<T>( data?: { }): Observable<T> {
    return this.http.post<T>(this.baceUrl +'auth/loginRegister' , data)
  
  }
  getOptions(headers?: any) {
    headers = headers? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.token;
    return {
      headers: new HttpHeaders(headers)
    }
  }

  addmor<T>( data?: { }, headers?: object): Observable<T>{
    return this.http.post<T>(this.baceUrl+'api/update',data, this.getOptions(headers))
  }
  addmorSupervisor<T>( data?: { }, headers?: object): Observable<T>{
    return this.http.post<T>(this.baceUrl+'api/updateSupervisor',data, this.getOptions(headers))
  }
 



}
export interface Userss {
  _id?:string;
  id?: String;
  user?:string;
  supervisor_id:string;
  name?: string;
 gmail?: String;
  phone?: String;
  password?:String;
  token?: String;
  city?:String;
  School?:String;
  rolNumber:number;
  more_info:string;
}