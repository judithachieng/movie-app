
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  isLoggedIn = false;
  userEmail: string | null = null;

  login(email: string, password: string): boolean {
    // Simulate server authentication
    if (email === 'yourname@gmail.com' && password === 'Password.0707') {
      this.isLoggedIn = true;
      this.userEmail = email;
      localStorage.setItem('email', email);
      return true;
    } else {
      this.isLoggedIn = false;
      this.userEmail = null;
      localStorage.removeItem('email');
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userEmail = null;
    localStorage.removeItem('email');
  }
}

