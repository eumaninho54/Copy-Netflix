import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowseComponent } from './browse.component';

import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    BrowseComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [BrowseComponent],
  bootstrap: [BrowseComponent]
})
export class BrowseModule { }
