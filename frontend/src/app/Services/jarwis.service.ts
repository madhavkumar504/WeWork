import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class JarwisService {


  constructor(private http: HttpClient) { }

  signup(data:any){
    return this.http.post('http://127.0.0.1:8000/api/signup', data);
  }

  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }
  sendPasswordResetLink(data: any){
    return this.http.post('http://127.0.0.1:8000/api/sendPasswordResetLink', data);
  }
  changePassword(data: any){
    return this.http.post('http://127.0.0.1:8000/api/resetPassword', data);
  }
}
