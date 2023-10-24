import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JopSeekerRoutingModule } from './jop-seeker-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { UserViewComponent } from './user-view/user-view.component';
import { UserService } from '../user.service';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserViewComponent
  ],
  imports: [
    CommonModule,
    JopSeekerRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    CalendarModule
  ],
  providers: [UserService],
})
export class JopSeekerModule { }
