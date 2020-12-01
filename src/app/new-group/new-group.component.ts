import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

   public  groupName: string;
  public  groupDescription: string;
  constructor(
        private router: Router,public http: HttpClient
  ) {
       
  }
  ngOnInit(): void {
  }
  onSubmit() {
     var valid = true;
    console.log(this.groupName + this.groupDescription);
    
    var postdata ={
      "groupName":this.groupName,
      "groupDescription":this.groupDescription
    };
      // reset alerts on submit
    if (valid == true)
    {
    
      

    this.http.post<any>(environment.Base_url + '/user/login',postdata).subscribe(data => {
      if(data!=undefined)
       {  this.router.navigate(['home']);
          
       }
          
     },
     (err: HttpErrorResponse) => {
        console.log(err.message);    // Show error, if any.
      });
     

    }
     
   
    

           
  }

}
