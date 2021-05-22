import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  todo : any =[];
  workspaceType:any = ['Website','Android','Laravel'];

  constructor(public generalservice:GeneralService,
                     private router: Router,
                     private http: HttpClient) { }

  ngOnInit(): void {
    this.generalservice.getData().subscribe(data=>{
      this.todo = data;
      console.log(this.todo);
    })

  }


  addList(newTodo:any){
    this.todo.push(newTodo);
    console.log(this.todo);
    this.generalservice.sharedData.next({"wkspce":this.todo});
  }

  workspaceBoard(item:any){
    let workspaceData:any = [];
    this.router.navigateByUrl('profile/workspace-item-board');
    workspaceData = this.todo.find((x:any) => x == item);
    console.log(workspaceData);
    this.generalservice.sharedData.next({"wkspceTitle":workspaceData});

  }
  //=======================[post data from workspace form]======================
  onSubmit(data:any){
    let httpurl = 'http://127.0.0.1:8000/api/workspaceAddItem';
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    let body = JSON.stringify(data);
    var request = new HttpRequest("POST", httpurl, data,{headers});

    console.log(request);
    this.http.request(request)
    .subscribe((result)=>{
      console.warn(result);

    })

  }
  //=======================[get data from database ]=============================



}
