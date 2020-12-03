

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
   
 
@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {
  eventId: string;
  eventResult: any;
  enableDeleteEvent: boolean=false;

  constructor(  public http: HttpClient,private router: Router,
    public route: ActivatedRoute) {
 
    this. eventId = this.route.snapshot.paramMap.get('id');
    console.log(this.eventId); //get id parameter
}

  ngOnInit(): void {
     this.getEventDetails();
  }
  deleteEvent() 
  {
    var authtoken = sessionStorage.getItem("auth_token");

      
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:  authtoken,


      })
    };
 
    this.http.delete<any>(environment.Base_url + '/event/'+this.eventId,httpOptions).subscribe(data => {
      if (data != undefined) {
         console.log(data)
        if (data.status == 200) {
 
          console.log(data);
          
          this.router.navigate(['/meetupgroups']);

          


        }
      

      }
          
     },
     (err: HttpErrorResponse) => {
        console.log(err.message);    // Show error, if any.
      });



  }
   
  getEventDetails()
  {
    var authtoken = sessionStorage.getItem("auth_token");

    var user_id = sessionStorage.getItem("user_id");

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:  authtoken,


      })
    };
 
    this.http.get<any>(environment.Base_url + '/event/'+this.eventId,httpOptions).subscribe(data => {
      if (data != undefined) {
         console.log(data)
        if (data.status == 200) {
          console.log(data);
          this.eventResult = data.data.event;
         
          if (this.eventResult.creatorId == user_id) { 
            this.enableDeleteEvent = true;
          }
          
        }
      

      }
          
     },
     (err: HttpErrorResponse) => {
        console.log(err.message);    // Show error, if any.
      });



  }
  goToURL() {
    window.open(this.eventResult.eventLink, "_blank");

 }

 
}
