import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login.component';
import { LoginNavComponent } from 'src/app/components/login/nav/login.nav.component';
import { LoginHeaderComponent} from "src/app/components/login/header/login.header.component"
import { LoginFooterComponent } from 'src/app/components/login/footer/login.footer.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    LoginComponent,
    LoginNavComponent,
    LoginHeaderComponent,
    LoginFooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  exports: [LoginComponent],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
