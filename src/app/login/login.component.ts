import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
        private router: Router,public http: HttpClient
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
        if (data != undefined) {
          this.message = "failure";
          console.log(data)
          if (data.status == 200) {
            console.log(data)
            sessionStorage.setItem("auth_token", data.data.auth_token);
            sessionStorage.setItem("user_id", data.data.user.userId);
            sessionStorage.setItem("loggedIn", 'true');

            this.router.navigate(['home']);
            
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
