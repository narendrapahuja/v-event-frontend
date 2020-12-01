import { Router } from '@angular/router';
 
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirectToHome() { 

    this.router.navigate(['index']);
  }
  redirectToLogin() { 

    this.router.navigate(['login']);
  }
  redirectToRegister() { 

    this.router.navigate(['Register']);
  }
}
