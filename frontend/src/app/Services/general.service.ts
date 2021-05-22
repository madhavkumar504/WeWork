import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  workspaceArray:any=[];

  public sharedData = new BehaviorSubject<any>(this.workspaceArray);

  constructor(private http: HttpClient) { }
  //=========================[Get data from workspace table]=======================
  getData(){
    let getUrl = 'http://127.0.0.1:8000/api/workspaceGetItem';
    return this.http.get(getUrl);
  }
  //=========================[Get data from users table]===========================
  getUsersData(){
    let getUrl = 'http://127.0.0.1:8000/api/usersGetData';
    return this.http.get(getUrl);
  }
}
