import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TemplatesSharedModule } from 'src/app/templates/templatesShared.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowseComponent } from './browse.component';
import { ProfileBrowseComponent } from 'src/app/components/browse/profile/profile.browse.component';
import { HeaderBrowseComponent } from 'src/app/components/browse/header/header.browse.component';
import { MainBrowseComponent } from 'src/app/components/browse/main/main.browse.component';
import { FooterBrowseComponent } from 'src/app/components/browse/footer/footer.browse.component';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    BrowseComponent,
    ProfileBrowseComponent,
    MainBrowseComponent,
    HeaderBrowseComponent,
    FooterBrowseComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    TemplatesSharedModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    SwiperModule
    
  ],
  exports: [BrowseComponent],
  bootstrap: [BrowseComponent]
})
export class BrowseModule { }
