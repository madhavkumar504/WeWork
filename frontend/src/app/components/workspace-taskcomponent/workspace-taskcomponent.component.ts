import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-workspace-taskcomponent',
  templateUrl: './workspace-taskcomponent.component.html',
  styleUrls: ['./workspace-taskcomponent.component.css']
})
export class WorkspaceTaskcomponentComponent implements OnInit {
  todoComments: any = [];
  workspaceData:any = [];

  constructor( private generalService: GeneralService ) { }

  ngOnInit(): void {
    this.generalService.sharedData.subscribe(result=>{

      this.workspaceData = result.taskUser;
      console.log(this.workspaceData);
    })
  }
  addComment(comments: any){
    this.todoComments.push(comments);
    console.log(this.todoComments);
  }

}
