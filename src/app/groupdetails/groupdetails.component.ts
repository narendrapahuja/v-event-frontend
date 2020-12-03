import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ViewChild, ElementRef} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  selector: 'app-groupdetails',
  templateUrl: './groupdetails.component.html',
  styleUrls: ['./groupdetails.component.css']
})
export class GroupdetailsComponent implements OnInit {
  groupId: string;
  groupResult: any;
  participantEmailId: string;
  enableDeleteGroup: boolean=false;
  public groupEventList: EventList[] = []
  public message: string=''; 

  @ViewChild('closepopup') closepopup: ElementRef;

   
 

  constructor(   private toastr: ToastrService, private modalService: NgbModal
,    public http: HttpClient,private router: Router,
    public route: ActivatedRoute) {
 
    this. groupId = this.route.snapshot.paramMap.get('id');
    console.log(this.groupId); //get id parameter
}

  ngOnInit(): void {
    this.getGroupDetails();
    this.getGroupEventList();
  }

  newEvent()
  { 
    this.router.navigate(['/newevent', this.groupId]);


  }

  viewEvent(row)
  
  { 

    this.router.navigate(['/eventdetails', row.eventId]);

  }

  

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  

  deleteGroup()  
  {
    var authtoken = sessionStorage.getItem("auth_token");

      
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:  authtoken,


      })
    };
 
    this.http.delete<any>(environment.Base_url + '/group/'+this.groupId,httpOptions).subscribe(data => {
      if (data != undefined) {
         console.log(data)
        if (data.status == 200) {
 
          console.log(data);
          
          this.router.navigate(['/meetupgroups']);

          //this.groupResult = data.data.events;
          // data.data.events.forEach(item => {
          //   this.groupEventList.push({
          //     eventId: item.eventId,
          //     creatorId: item.creatorId,
          //     eventName: item.eventName,
          //     eventDescription: item.eventDescription,
          //     eventDate: item.eventDate,
          //     eventLink: item.eventLink,
          //     eventMeetupGroupId: item.eventMeetupGroupId,
          //     eventTime: item.eventTime,
          //    })
          // });


        }
      

      }
          
     },
     (err: HttpErrorResponse) => {
        console.log(err.message);    // Show error, if any.
      });



  }
  addParticipant(){
 
     
      var participantData ={
        "groupId":this.groupId,
        "participantEmailId":this.participantEmailId,
        
      };
        // reset alerts on submit
      
        var authtoken = sessionStorage.getItem("auth_token");
   
        const headers = new HttpHeaders()
        .set('Authorization', authtoken)
        .set('Content-Type', 'application/json');
   
        this.http.post<any>(environment.Base_url + '/group/participant/', JSON.stringify(participantData), {
          headers: headers
        }).subscribe(data => {
          if (data != undefined) {
            console.log(data);
            document.getElementById('closepopup').click();
            //  this.closepopup.nativeElement.click();
            this.message = data.message
            console.log(this.message);
            this.participantEmailId = '';
             this.toastr.success(this.message);
              }
            else {
   
              this.message=data.message
              this.toastr.success(this.message);
    
             }
   
           
              
         },
          (err: HttpErrorResponse) => {
            this.toastr.error('error');

            console.log(err.message);    // Show error, if any.
          });
        
      
       
   
      
       
  }
  
  getGroupDetails()
  {
    var authtoken = sessionStorage.getItem("auth_token");
    var user_id = sessionStorage.getItem("user_id");

 
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:  authtoken,


      })
    };
 
    this.http.get<any>(environment.Base_url + '/group/'+this.groupId,httpOptions).subscribe(data => {
      if (data != undefined) {
         console.log(data)
        if (data.status == 200) {
          console.log(data);
          this.groupResult = data.data.group;
          if (this.groupResult.creatorId == user_id) { 
            this.enableDeleteGroup = true;
          }
          // data.data.groups.forEach(item => {
          // this.userGroupList.push({groupName:item.groupName,groupDescription:item.groupDescription,groupId:item.groupId,creatorId:item.creatorId})
          // });


          
        }
      

      }
          
     },
     (err: HttpErrorResponse) => {
        console.log(err.message);    // Show error, if any.
      });



  }

  getGroupEventList()
  {
    var authtoken = sessionStorage.getItem("auth_token");

      
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:  authtoken,


      })
    };
 
    this.http.get<any>(environment.Base_url + '/event?groupId='+this.groupId,httpOptions).subscribe(data => {
      if (data != undefined) {
         console.log(data)
        if (data.status == 200) {
          console.log('event details');

          console.log(data);
          //this.groupResult = data.data.events;
          data.data.events.forEach(item => {
            this.groupEventList.push({
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
      

      }
          
     },
     (err: HttpErrorResponse) => {
        console.log(err.message);    // Show error, if any.
      });



  }
}
