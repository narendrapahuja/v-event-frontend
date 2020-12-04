import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailId: string='';
  password: string='';
  firstName: string='';
  lastName: string='';
  message: string='';
    constructor(     private toastr: ToastrService,   private router: Router,public http: HttpClient
      ) {}

  ngOnInit(): void {
  }


  onSubmit() {
     var valid = true;
     
    var registerData ={
      "emailId":this.emailId,
      "firstName":this.firstName,
      "lastName":this.lastName,
      "password":this.password
    };
      // reset alerts on submit
    if (valid == true)
    {
    
 
      const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

      this.http.post<any>(environment.Base_url + '/user/register', registerData, {
        headers: headers
      }).subscribe(data => {
        if (data != undefined) {
          this.message = "failure";
          console.log(data)
          if (data.status == 201) {
            console.log(data)
            this.message = "Registration success";
            this.toastr.success(this.message);
            this.router.navigate(['login']);
            
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
  
}
