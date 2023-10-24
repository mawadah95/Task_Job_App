import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RegistrationComponent } from './registration/registration.component';

import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { UserProfileComponent } from './jop-seeker/user-profile/user-profile.component';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { JopSeekerRoutingModule } from './jop-seeker/jop-seeker-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { JobProviderModule } from './job-provider/job-provider.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    UserProfileComponent,
    AboutUsComponent,
    
  ],
  imports: [
    JobProviderModule,
    JopSeekerRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    CalendarModule,
    CommonModule,
  ],
  providers: [ToastrService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
