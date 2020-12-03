import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
 import { environment } from 'src/environments/environment';
 interface GroupList {
  creatorId: string;
  groupName: string;
  groupDescription: string;
  groupId: string; 
   
}
@Component({
  selector: 'app-meetupgroups',
  templateUrl: './meetupgroups.component.html',
  styleUrls: ['./meetupgroups.component.css']
})
export class MeetupgroupsComponent implements OnInit {
  public groupList: GroupList[] = []
  message: string = '';
 


  constructor(        private router: Router,public http: HttpClient
    ) {}


  ngOnInit(): void {
    this.getAllGroups();
  }

  newGroup() { 
    this.router.navigate(['/addgroup']);

  }

  viewGroup(group) {
    this.router.navigate(['/groupdetails', group.groupId]);

   }
  getAllGroups()
  {
    var authtoken = sessionStorage.getItem("auth_token");

      
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:  authtoken,


      })
    };
 
    this.http.get<any>(environment.Base_url + '/group',httpOptions).subscribe(data => {
      if (data != undefined) {
        this.message = "failure";
        console.log(data)
        if (data.status == 200) {
          console.log(data)
          data.data.groups.forEach(item => {
          this.groupList.push({groupName:item.groupName,groupDescription:item.groupDescription,groupId:item.groupId,creatorId:item.creatorId})
          });
          
        }
        else {

          this.message=data.data.message

         }

      }
          
     },
     (err: HttpErrorResponse) => {
        console.log(err.message);    // Show error, if any.
      });



  }
}
