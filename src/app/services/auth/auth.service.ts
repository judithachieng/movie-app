
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  private authenticated = false;
  private userEmail: string | null = null;

  authenticate(email: string, password: string): boolean {
    // Simulate authentication with mock credentials
    if (email === 'yourname@gmail.com' && password === 'Password.0707') {
      this.authenticated = true;
      this.userEmail = email;
      return true;
    }

    this.authenticated = false;
    this.userEmail = null;
    return false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUserEmail(): string | null {
    return this.userEmail;
  }

  logout(): void {
    this.authenticated = false;
    this.userEmail = null;
  }
}

