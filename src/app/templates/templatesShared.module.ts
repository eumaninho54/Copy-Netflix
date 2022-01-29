import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderLogoNetflixComponent } from './header-logo-netflix/header-logo-netflix.component';



@NgModule({
  declarations: [
    HeaderLogoNetflixComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderLogoNetflixComponent
  ]
})
export class TemplatesSharedModule { }
