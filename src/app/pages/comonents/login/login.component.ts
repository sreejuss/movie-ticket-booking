import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLogin = true; // Toggle between Login & Register
  message = '';



  loginData = { email: '', password: '' };
  registerData = { name: '', email: '', password: '' };

  constructor(private router:Router){}

  login() {
    const storedUser = localStorage.getItem(this.loginData.email);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === this.loginData.password) {
        this.message = 'Login successful!';
        this.router.navigate(['movies'])
      } else {
        this.message = 'Invalid password!';
      }
    } else {
      this.message = 'User not found!';
    }
  }

  register() {
    if (localStorage.getItem(this.registerData.email)) {
      this.message = 'User already exists!';
    } else {
      localStorage.setItem(this.registerData.email, JSON.stringify(this.registerData));
      this.message = 'Registration successful!';
      this.isLogin = true; 
      localStorage.setItem('loggedIn','true');

    }
  }
}
