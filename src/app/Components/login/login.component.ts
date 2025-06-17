import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLogin = true;

  registerGroup: FormGroup;
  loginGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fullname: ['', Validators.required]
    });

    this.loginGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  toggle() {
    this.isLogin = !this.isLogin;
  }

  onRegister() {
    if (this.registerGroup.invalid) return;

    this.authService.register(this.registerGroup.value).subscribe({
      next: (res) => {
        alert("Registration successful!");
        this.registerGroup.reset();
        this.toggle();
      },
      error: (err) => {
        console.error("Registration error:", err);
        alert("Registration failed!");
      }
    });
  }

  onLogin() {
    if (this.loginGroup.invalid) return;

    this.authService.login(this.loginGroup.value).subscribe({
      next: (res) => {
        if (!res || !res.token) {
          alert("Login failed!");
          return;
        }
        localStorage.setItem('token', res.token);
        alert("Welcome! You are logged in.");
        this.loginGroup.reset();
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error("Login error:", err);
        alert("Login failed!");
      }
    });
  }
}