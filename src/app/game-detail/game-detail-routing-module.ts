import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameDetailComponent } from './components/game-detail/game-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: GameDetailComponent
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
export class GameDetailRoutingModule {}
