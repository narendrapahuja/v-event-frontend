import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  public  username: string;
  public  password: string;
  public  message: string;
  constructor(
        private router: Router,private toastr: ToastrService,public http: HttpClient
  ) {
       
  }

  ngOnInit() {
 

      // get return url from route parameters or default to '/'
   }

  // convenience getter for easy access to form fields

  onSubmit() {
    this.submitted = true;
    var valid = true;
    console.log(this.username + this.password);
    
    var logindata ={
      "emailId":this.username,
      "password":this.password
    };
      // reset alerts on submit
    if (valid == true)
    {
    
 
      const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

      this.http.post<any>(environment.Base_url + '/user/login', JSON.stringify(logindata), {
        headers: headers
      }).subscribe(data => {
        console.log(data)

        if (data != undefined) {
          this.message = "failure";
          console.log(data)
          if (data.status == 200) {
            console.log(data)
            sessionStorage.setItem("auth_token", data.data.auth_token);
            sessionStorage.setItem("user_id", data.data.user.userId);
            sessionStorage.setItem("loggedIn", 'true');
            this.message=data.data.message
            this.toastr.success("Login Success");

            this.router.navigate(['home']);

          }
          else {
            this.message=data.data.message

            this.toastr.error("Incorrect Credentials");


           }

        }
        else {
          this.toastr.error("Incorrect Credentials");
          this.message = "Incorrect Credentials";

        }
            
       },
       (err: HttpErrorResponse) => {
         console.log(err.message);
         this.message = "Incorrect Credentials";
         // Show error, if any.
        });
      
    
     

    }
     
   
    

           
  }
}
