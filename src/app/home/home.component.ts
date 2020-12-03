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

interface EventList {
  eventId: string;
  creatorId: string;
  eventName: string;
  eventDescription: string;
  eventDate: string;
  eventLink: string; 
  eventMeetupGroupId: string; 
  eventTime: string; 
   
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  

export class HomeComponent implements OnInit {
  message: string = '';
  
  public userGroupList: GroupList[] = []
  public userEventList :EventList[]=[]
  public userCreatedEventList :EventList[]=[]



  constructor(        private router: Router,public http: HttpClient
    ) {}


  ngOnInit(): void {

    this.getAllUserEverList();
    this.getAllUserGroupList();
    this.getMyEventList();


  }



  viewGroup(group) {
    this.router.navigate(['/groupdetails', group.groupId]);

   }
  getAllUserGroupList()
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
          this.userGroupList.push({groupName:item.groupName,groupDescription:item.groupDescription,groupId:item.groupId,creatorId:item.creatorId})
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
  getAllUserEverList()
  { 
    this.userEventList = [];

    var authtoken = sessionStorage.getItem("auth_token");
    console.log("authtoken" + authtoken);

         
       
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:  authtoken,


      })
    };
 
    this.http.get<any>(environment.Base_url + '/event',httpOptions).subscribe(data => {
      if (data != undefined) {
          if (data.status == 200) {
           data.data.events.forEach(item => {
            this.userEventList.push({
              eventId: item.eventId,
              creatorId: item.creatorId,
              eventName: item.eventName,
              eventDescription: item.eventDescription,
              eventDate: item.eventDate,
              eventLink: item.eventLink,
              eventMeetupGroupId: item.eventMeetupGroupId,
              eventTime: item.eventTime,
             })
          });
           console.log(this.userEventList);
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
 

  viewEvent(row)
  
  { 

    this.router.navigate(['/eventdetails', row.eventId]);

  }

  getMyEventList()
  { 
    var authtoken = sessionStorage.getItem("auth_token");
    var user_id = sessionStorage.getItem("user_id");

     
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:  authtoken,


      })
    };
 
    this.http.get<any>(environment.Base_url + '/event?createdBy='+user_id ,httpOptions).subscribe(data => {
      if (data != undefined) {
        //this.message = "failure";
        console.log(data)
        if (data.status == 200) {
          console.log(data)
          data.data.events.forEach(item => {
            this.userCreatedEventList.push({
              eventId: item.eventId,
              creatorId: item.creatorId,
              eventName: item.eventName,
              eventDescription: item.eventDescription,
              eventDate: item.eventDate,
              eventLink: item.eventLink,
              eventMeetupGroupId: item.eventMeetupGroupId,
              eventTime: item.eventTime,
             })
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

  
  // getAllEverList()
  // { 
  //   var authtoken = sessionStorage.getItem("auth_token");

  //   const headers = new HttpHeaders()
  //   .set('Authorization', authtoken)
  //   .set('Content-Type', 'application/json');
  //   this.http.get<any>(environment.Base_url + '/event',).subscribe(data => {
  //     if (data != undefined) {
  //       this.message = "failure";
  //       console.log(data)
  //       if (data.status == 200) {
  //         console.log(data)
          
          
  //       }
  //       else {

  //         this.message=data.data.message

  //        }

  //     }
          
  //    },
  //    (err: HttpErrorResponse) => {
  //       console.log(err.message);    // Show error, if any.
  //     });
    
  // }

 
}
