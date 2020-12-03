import { Router } from '@angular/router';
 
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedin: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {

    if (sessionStorage.getItem("loggedIn") == 'true') {
      this.loggedin=true;

    }
    else{
      this.loggedin=false;

    }
  }
  redirectToHome() { 

    this.router.navigate(['home']);
  }

  logout() { 
    sessionStorage.setItem("loggedIn", 'false');

    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  redirectToLogin() { 

    this.router.navigate(['/login']);
  }
  redirectToRegister() { 

    this.router.navigate(['/Register']);
  }
  redirectToMeetupGroups() { 

    this.router.navigate(['/meetupgroups']);
  }
  
}
