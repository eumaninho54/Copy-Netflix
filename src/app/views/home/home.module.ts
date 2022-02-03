import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeHeaderComponent } from 'src/app/components/home/header/home.header.component';
import { HomeMainComponent } from 'src/app/components/home/main/home.main.component';
import { HomeFooterComponent } from 'src/app/components/home/footer/home.footer.component';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    HomeFooterComponent,
    HomeMainComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  exports: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
