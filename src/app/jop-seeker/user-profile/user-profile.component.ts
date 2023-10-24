import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
//import { DomSanitizer } from '@angular/platform-browser';

interface UserProfile {
  fullName: string;
  summary: string;
  skills: string;
  birthdate: Date;
  email: string;
  phoneNumber: string;
  location: string;
  profileImage: File | null;
  cvFile: File | null;
}


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: UserProfile = {
    fullName: '',
    summary: '',
    skills: '',
    birthdate: new Date(),
    email: '',
    phoneNumber: '',
    location: '',
    profileImage: null,
    cvFile: null 
  };
  yearRange: string = '1900:2023';
 
  constructor(private userService: UserService, private router: Router) {}

  onFileSelected(event: any) {
    this.user.cvFile = event.target.files[0];
  }

  saveUserProfile() {
    this.userService.saveUser(this.user);
    console.log('User data saved:', this.user);
    alert('Profile saved successfully!');
    this.router.navigate(['/user-view']); // Navigate to the user view page after saving the profile
  }
  
  // onFileSelected(event: any) {
  //   this.user.cvFile = event.target.files[0]; 
  // }

  // constructor(private userService: UserService, private router: Router) {}

  // saveUserProfile() {
  //   this.userService.saveUser(this.user);
  //   console.log('User data saved:', this.user);
  //   alert('Profile saved successfully!');
  //   this.router.navigate(['/user-view']);
   
  // }
  

  
 // constructor(private router: Router) {}
  // saveUserProfile() {
  //   // Save user profile to localStorage
  //   localStorage.setItem('userProfile', JSON.stringify(this.user));

  //   // Optionally, upload the profile image and CV file to a server using HTTP POST request
  //   // ...

  //  alert('Profile saved successfully!');
  //   // this.router.navigate(['/user-view']);
  // }
}



