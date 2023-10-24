import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private loggedInUser: any;

  constructor() {
    // Retrieve user data from localStorage if available
    const storedUserData = localStorage.getItem('user');
    this.loggedInUser = storedUserData ? JSON.parse(storedUserData) : {};
  }

  // Save user data to localStorage
  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedInUser = user;
  }

  // Get user data
  getUser(): any {
    return this.loggedInUser;
  }

  // Clear user data (logout)
  clearUser() {
    localStorage.removeItem('user');
    this.loggedInUser = {};
  }
  


  //old
  // private loggedInUser: any; // Declare loggedInUser property

  // constructor() { }

  // // Save user data to localStorage
  // saveUser(user: any) {
  //   console.log('Saving user:', user);
  //   localStorage.setItem('user', JSON.stringify(user));
  // }
  
  // getUser(): any {
  //   const user = localStorage.getItem('user');
  //   console.log('Retrieved user:', user);
  //   return user ? JSON.parse(user) : null;
  // }
  

  // // Clear user data from localStorage (logout)
  // clearUser() {
  //   localStorage.removeItem('user');
  // }


}
