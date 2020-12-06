import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { SharedModule } from '../shared/shared.module';
import { SingleCategoryRoutingModule } from "./single-category-routing.module";


@NgModule({
  declarations: [SingleCategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    SingleCategoryRoutingModule,
  ],
})
export class SingleCategoryModule { }
