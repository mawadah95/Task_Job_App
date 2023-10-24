import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
  }
  

  onSubmit() {
    console.log('Form Submitted:', this.username, this.password);
    
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Stored User:', storedUser);
  
    if (storedUser.username === this.username && storedUser.password === this.password) {
      // Login successful, navigate to home page or perform other actions
      // For example, navigate to home page:
      this.router.navigate(['/Home']);
    } else {
      // Invalid credentials
      this.errorMessage = 'Invalid username or password. Please try again.';
      this.toastr.error('Invalid username or password. Please try again.', 'Error');
    }
  }
  
  

 
  }
  

  // loginForm: FormGroup;
  

  // constructor(private fb: FormBuilder, private router: Router) {
  //   this.loginForm = this.fb.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  // onSubmit() {
  //   const username = this.loginForm.get('username')?.value;
  //   const password = this.loginForm.get('password')?.value;
  
  //   if (username !== null && password !== null) {
  //     if (username === 'user' && password === '123') {
  //       console.log('Authentication successful');
  
  //       // Navigate to the user profile page (assuming 'user-profile' is the route for the user profile page)
  //       this.router.navigate(['/home']);
  //     } else {
  //       console.log('Authentication failed');
  //     }
  //   }
  // }
  
  

  // username: string = '';
  // password: string = '';
  // rememberMe: boolean = false;

  // constructor(private router: Router) {}

  // onSubmit() {
  //   console.log('Username:', this.username);
  //   console.log('Password:', this.password);
  //   console.log('Remember Me:', this.rememberMe);
  
  //   if (this.username === 'user' && this.password === '123') {
      
  //     this.router.navigate(['/useraccount']);
  //   } else {
     
  //     console.log('Incorrect username or password');
  //   }
  // }
  
