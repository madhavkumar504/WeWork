import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  list_Board : any[] =[];
  workspaceData : any = [];
  

  constructor(private generalservice:GeneralService) { }

  ngOnInit(): void {
    this.generalservice.sharedData.subscribe(result =>{
      console.log(result.wkspce);
     this.workspaceData = result.wkspce;

    })
  }

  listBoard(boardList:any){
    this.list_Board.push(boardList);
    console.log(this.list_Board);
  }
}
