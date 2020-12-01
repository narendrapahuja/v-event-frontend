import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    constructor(        private router: Router,public http: HttpClient
      ) {}

  ngOnInit(): void {
  }

   onSubmit() {
    var valid = true;
     console.log(this.emailId + this.password + this.firstName + this.lastName);
     
         
    var registerData ={
      "emailId":this.emailId,
      "firstName":this.firstName,
      "lastName":this.lastName,
      "password":this.password
    };
      // reset alerts on submit
      if (valid == true)
      {
      
        
  
      this.http.post<any>(environment.Base_url + '/user/register',registerData).subscribe(data => {
       
        console.log(data);

        if (data.Authenticated == "true")
        
         {  this.router.navigate(['login']);
            
         }
            
       },
       (err: HttpErrorResponse) => {
          console.log(err.message);    // Show error, if any.
        });
       
  
      }
    
           
  }

}
