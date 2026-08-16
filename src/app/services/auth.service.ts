import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.checkAuthStatus();
  }

  // Check if user is authenticated (from localStorage)
  private checkAuthStatus(): void {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    }
  }

  // Sign up with email and password
  signup(email: string, password: string, displayName: string): Observable<any> {
    return new Observable(observer => {
      // Simulate signup - replace with Firebase when configured
      setTimeout(() => {
        const user: User = {
          uid: Math.random().toString(36).substr(2, 9),
          email: email,
          displayName: displayName
        };
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        observer.next(user);
        observer.complete();
      }, 1000);
    });
  }

  // Login with email and password
  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      // Simulate login - replace with Firebase when configured
      setTimeout(() => {
        const user: User = {
          uid: Math.random().toString(36).substr(2, 9),
          email: email,
          displayName: email.split('@')[0]
        };
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        observer.next(user);
        observer.complete();
      }, 1000);
    });
  }

  // Logout
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Update user profile
  updateProfile(displayName: string): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        const currentUser = this.currentUserSubject.value;
        if (currentUser) {
          currentUser.displayName = displayName;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.currentUserSubject.next(currentUser);
        }
        observer.next(currentUser);
        observer.complete();
      }, 500);
    });
  }

  // Login with user ID and password
  loginWithId(userId: string, password: string): Observable<any> {
    return new Observable(observer => {
      // Simulate login with ID - replace with Firebase when configured
      setTimeout(() => {
        const user: User = {
          uid: userId,
          email: `${userId}@app.local`,
          displayName: userId.charAt(0).toUpperCase() + userId.slice(1)
        };
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        observer.next(user);
        observer.complete();
      }, 1000);
    });
  }
}
