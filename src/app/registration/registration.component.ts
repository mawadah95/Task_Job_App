import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: { username: string, email: string, password: string } = { username: '', email: '', password: '' };
  errorMessage: string = '';


  constructor(private fb: FormBuilder, private toastr: ToastrService) {
  }


  onSubmit() {
    if (!this.user.username || !this.user.email || !this.user.password) {
      this.errorMessage = 'Please fill out all the fields.';
      this.toastr.error('Please fill out all the fields.', 'Error');
      return;
    }
  
    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(this.user));
  
    // Show success message
    this.toastr.success('Registration successful!', 'Success');
  
    // Redirect to login page or navigate to home page
  }
  
}
  


