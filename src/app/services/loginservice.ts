import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isAuthenticated = false;

  constructor() {}

  // Simulate a login process
  login(username: string, password: string): boolean {
    // Your authentication logic here
    // For example, you can compare username and password with a predefined list or make an HTTP request to a server

    if (username === 'demo' && password === 'password') {
      this.isAuthenticated = true;
      return true; // Successful login
    } else {
      this.isAuthenticated = false;
      return false; // Failed login
    }
  }

  // Check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
