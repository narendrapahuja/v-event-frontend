import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {

  constructor(       private toastr: ToastrService,  private router: Router,public http: HttpClient
    ) {}

  ngOnInit(): void {
  }

  message: string='';
  groupName: string='';
  groupDescription: string='';
  onSubmit() {
     
   var groupData ={
     "groupName":this.groupName,
     "groupDescription":this.groupDescription,
     
   };
     // reset alerts on submit
   
     var authtoken = sessionStorage.getItem("auth_token");

     const headers = new HttpHeaders()
     .set('Authorization', authtoken)
     .set('Content-Type', 'application/json');

     this.http.post<any>(environment.Base_url + '/group', JSON.stringify(groupData), {
       headers: headers
     }).subscribe(data => {
       if (data != undefined) {
         this.message = "failure";
         console.log(data)
         if (data.status == 201) {
           console.log(data)
           this.message = "group creation success";
           this.toastr.success(this.message);

           this.router.navigate(['home']);
           
         }
         else {

           this.message=data.data.message
            this.toastr.error(this.message);
          }

       }
           
      },
      (err: HttpErrorResponse) => {
         console.log(err.message);    // Show error, if any.
       });
     
   
    

   }
    
  
   

          
 
}
