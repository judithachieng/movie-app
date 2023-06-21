import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userEmail: string | null = null;

  constructor(private authService: AuthService, private router: Router,) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email');
    console.log(this.userEmail)
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }

}
