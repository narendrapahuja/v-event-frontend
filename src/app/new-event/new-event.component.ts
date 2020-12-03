import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  groupId: string;
  constructor(  public http: HttpClient,private router: Router,private toastr: ToastrService,
    public route: ActivatedRoute) {
 
    this. groupId = this.route.snapshot.paramMap.get('id');
    console.log(this.groupId); //get id parameter
}
  
  public eventTime:string=""
  public eventLink:string=""
  public eventDate:string=""
  public eventName:string=""
  public eventDescription:string=""
  public message:string=""
   ngOnInit(): void {
   }
  
  
  onSubmit() {
     
    var eventData ={
      "eventTime":this.eventTime,
      "eventLink":this.eventLink,
      "eventDate":this.eventDate,
      "eventName":this.eventName,
      "eventMeetupGroupId":this.groupId,
      "eventDescription":this.eventDescription,
      
    };
      // reset alerts on submit
    console.log(eventData)
      var authtoken = sessionStorage.getItem("auth_token");
 
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization:  authtoken,
  
  
        })
      };
   
 
      this.http.post<any>(environment.Base_url + '/event', eventData, httpOptions).subscribe(data => {
        console.log(data);

        if (data != undefined) {
          this.message = "failure";
        
          if (data.status == 201) {
            this.message = "event creation success";
            this.toastr.success(this.message);

            this.router.navigate(['home']);
            
          }
          else {
 
            this.message = data.data.message;
            this.toastr.error(this.message);

           }
 
        }
            
       },
       (err: HttpErrorResponse) => {
          console.log(err.message);    // Show error, if any.
        });
      
    
     
 
    }
     
}
