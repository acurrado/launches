import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
