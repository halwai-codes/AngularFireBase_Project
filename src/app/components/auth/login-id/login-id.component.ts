import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-id',
  templateUrl: './login-id.component.html',
  styleUrls: ['./login-id.component.scss']
})
export class LoginIdComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  hidePassword = true;

  // Demo credentials
  demoUsers = [
    { userId: 'admin', password: 'admin123' },
    { userId: 'user1', password: 'user123' },
    { userId: 'user2', password: 'user123' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';

    const userId = this.f['userId'].value;
    const password = this.f['password'].value;

    // Verify credentials against demo users
    const validUser = this.demoUsers.find(u => u.userId === userId && u.password === password);

    if (!validUser) {
      this.error = 'Invalid user ID or password';
      this.loading = false;
      return;
    }

    // Use auth service to login
    this.authService.loginWithId(userId, password)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.error = error.message || 'Login failed';
          this.loading = false;
        }
      });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  // Fill demo credentials
  fillDemoCredentials(userId: string): void {
    this.loginForm.patchValue({
      userId: userId,
      password: this.demoUsers.find(u => u.userId === userId)?.password
    });
  }
}
