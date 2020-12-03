import { AddgroupComponent } from './addgroup/addgroup.component';
import { MeetupgroupsComponent } from './meetupgroups/meetupgroups.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { GroupdetailsComponent } from './groupdetails/groupdetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewEventComponent } from './new-event/new-event.component';
import { RegisterComponent } from './register/register.component';
 
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
   const routes: Routes =[
  {
    path: 'login',
    component:LoginComponent,
   },
   {
    path: 'home',
    component:HomeComponent,
   },
   {
    path: '',
    component:LoginComponent,
  },
  
  {
    path: 'register',
    component:RegisterComponent,
  },
  { path: 'groupdetails/:id', component: GroupdetailsComponent },

  { path: 'newevent/:id', component: NewEventComponent },

   
  { path: 'eventdetails/:id', component: EventdetailsComponent },
  { path: 'meetupgroups', component: MeetupgroupsComponent },
  { path: 'addgroup', component: AddgroupComponent },
  
 ];
@NgModule({  
  imports: [
  CommonModule,
  BrowserModule,
  RouterModule.forRoot(routes,{
    useHash: false,
    relativeLinkResolution: 'legacy'
})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
