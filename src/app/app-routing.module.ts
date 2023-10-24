import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { UserProfileComponent } from './jop-seeker/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { JobsComponent } from './job-provider/jobs/jobs.component';
import { UserViewComponent } from './jop-seeker/user-view/user-view.component';
import { AboutUsComponent } from './about-us/about-us.component';




const routes: Routes = [

  { path: 'Home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },

  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect to the login page if the path is empty
  // { path: '**', redirectTo: '/login' } ,// Redirect to the login page if the path is not found
  //{ path: 'job-seeker/user-profile',component: UserProfileComponent, },

  {
    path: 'jop-seeker',
    children: [
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'user-view', component: UserViewComponent },
      { path: '', redirectTo: '/user-profile', pathMatch: 'full' },
    ]
  },

  {
    path: 'job-provider',
    children: [
      { path: 'jobs', component: JobsComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
