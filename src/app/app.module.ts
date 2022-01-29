import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';
import { BrowseModule } from './views/browse/browse.module';
import { NotFoundModule } from './views/not-found/not-found.module';
import { LoginGuard } from './guards/login.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HomeModule,
    LoginModule,
    BrowseModule,
    NotFoundModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
