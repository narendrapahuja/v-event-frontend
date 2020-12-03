 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewEventComponent } from './new-event/new-event.component';
 import { HomeComponent } from './home/home.component';

 import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {
  MatDatepickerModule, } from '@angular/material/datepicker';
  import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

 import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { GroupdetailsComponent } from './groupdetails/groupdetails.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { MeetupgroupsComponent } from './meetupgroups/meetupgroups.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

 @NgModule({
  declarations: [
    AppComponent,
     RegisterComponent,
    NewEventComponent,
    HomeComponent,
    HomeComponent,
     HeaderComponent,
    LoginComponent,
     FooterComponent,
     AddgroupComponent,
     GroupdetailsComponent,
     EventdetailsComponent,
     MeetupgroupsComponent,
     

  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule,
 FormsModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule , MatInputModule ,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    CommonModule,RouterModule,
    HttpClientModule, NgbModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 