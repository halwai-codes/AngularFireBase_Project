import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  currentUser: User | null = null;
  loading = false;
  submitted = false;
  message = '';
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.initForm(user);
      }
    });
  }

  private initForm(user: User): void {
    this.profileForm = this.formBuilder.group({
      displayName: [user.displayName || '', [Validators.required, Validators.minLength(2)]],
      email: [user.email, [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.message = '';
    this.error = '';

    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    const displayName = this.f['displayName'].value;

    this.authService.updateProfile(displayName).subscribe({
      next: () => {
        this.message = 'Profile updated successfully!';
        this.loading = false;
        setTimeout(() => this.message = '', 3000);
      },
      error: (error) => {
        this.error = error.message || 'Failed to update profile';
        this.loading = false;
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
