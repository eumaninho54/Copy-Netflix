import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TemplatesSharedModule } from 'src/app/templates/templatesShared.module';

import { BrowseComponent } from './browse.component';
import { ProfileBrowseComponent } from 'src/app/components/browse/profile/profile.browse.component';
import { MainBrowseComponent } from 'src/app/components/browse/main/main.browse.component';



@NgModule({
  declarations: [
    BrowseComponent,
    ProfileBrowseComponent,
    MainBrowseComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TemplatesSharedModule,
    AppRoutingModule
  ],
  exports: [BrowseComponent],
  bootstrap: [BrowseComponent]
})
export class BrowseModule { }
