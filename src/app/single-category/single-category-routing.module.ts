import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCategoryComponent } from './components/single-category/single-category.component';

const routes: Routes = [
    {
      path: ':id',
      component: SingleCategoryComponent
    },
    {
      path: '**',
      loadChildren: () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class SingleCategoryRoutingModule {}
