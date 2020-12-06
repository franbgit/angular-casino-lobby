import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule {

}
