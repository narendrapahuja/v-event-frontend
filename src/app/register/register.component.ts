import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

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
    constructor(        private router: Router,public http: HttpClient
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

      this.http.post<any>(environment.Base_url + '/user/register', JSON.stringify(registerData), {
        headers: headers
      }).subscribe(data => {
        if (data != undefined) {
          this.message = "failure";
          console.log(data)
          if (data.status == 201) {
            console.log(data)
            this.message = "Registration success";
            this.router.navigate(['login']);
            
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
  
}
