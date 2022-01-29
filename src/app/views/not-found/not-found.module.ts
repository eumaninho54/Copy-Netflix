import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TemplatesSharedModule } from 'src/app/templates/templatesShared.module';
import { NotFoundComponent } from './not-found.component';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TemplatesSharedModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [NotFoundComponent],
  bootstrap: [NotFoundComponent]
})
export class NotFoundModule { }
