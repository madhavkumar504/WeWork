import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-workspace-item',
  templateUrl: './workspace-item.component.html',
  styleUrls: ['./workspace-item.component.css']
})
export class WorkspaceItemComponent implements OnInit {
  workspaceItem:any = [
    {name:''}
  ];
  workspaceBoardItem : any = [];
  createTask: any = [];
  getUsersData:any = [];

  constructor(private generalService: GeneralService,
              private router: Router) { }

  ngOnInit(): void {
    this.generalService.sharedData.subscribe(result=>{
      this.workspaceItem.name = result;
      this.workspaceBoardItem = result.wkspceTitle;
      // ====================[call back function for getUser table data in drop down ]==============
      this.generalService.getUsersData().subscribe(result=>{
        this.getUsersData = result;
        console.log(this.getUsersData);
      })

      console.log(this.workspaceBoardItem);
    })
  }
  onSubmit(task:any){
    this.createTask.push(task);
    console.log(this.createTask);
  }
  deleteTask(id:any){
    this.createTask.splice(id,1);
  }
  // ========================[Task detail navigate from here]===========================
  createTaskDetail(taskDetail:any){

    // let workspaceData:any = [];
    this.router.navigateByUrl('profile/workspace-add-task');
    // workspaceData = this.getUsersData.find((x:any) => x == taskDetail);
    // console.log(workspaceData);
    this.generalService.sharedData.next({"taskUser":this.getUsersData});

  }

}
