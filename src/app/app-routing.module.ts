import { HomeGuard } from './guards/Home.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { BrowseComponent } from './views/browse/browse.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "browse",
    component: BrowseComponent,
    canActivate: [LoginGuard],
    canLoad: [LoginGuard]
  },
  {
    path:"notfound",
    component: NotFoundComponent
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [HomeGuard]
  },
  {
    path: "**",
    redirectTo: "notfound"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
