 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewEventComponent } from './new-event/new-event.component';
import { RegisterComponent } from './register/register.component';
 
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { NewGroupComponent } from './new-group/new-group.component';
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
    component:HomeComponent,
  },
  {
    path: 'new-event',
    component:NewEventComponent,
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  
  {
    path: 'newgroup',
    component:NewGroupComponent,
  },
  
   
   
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
