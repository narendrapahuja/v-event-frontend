import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  constructor(
        private router: Router,public http: HttpClient,
  ) {
      // redirect to home if already logged in
      
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
    
      

    this.http.post<any>(environment.Base_url + '/user/login',logindata).subscribe(data => {
      if(data.Authenticated=="true")
       {  this.router.navigate(['home']);
          
       }
          
     },
     (err: HttpErrorResponse) => {
        console.log(err.message);    // Show error, if any.
      });
     

    }
     
   
    

    
           
  }
}
