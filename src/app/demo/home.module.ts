import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from '../search/search.component';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class HomeModule { }
