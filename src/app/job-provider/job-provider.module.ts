import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobProviderRoutingModule } from './job-provider-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    JobProviderRoutingModule,
    BrowserModule,
    FormsModule,
  ]
})
export class JobProviderModule { }
