import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { UserViewComponent } from './user-view/user-view.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  
  {
    path: 'app',
    children: [
      { path: 'Home', component: HomeComponent},
    ]
  },
  
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'user-view', component: UserViewComponent },

  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class JopSeekerRoutingModule { }
