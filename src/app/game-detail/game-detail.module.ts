import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailComponent } from './components/game-detail/game-detail.component';

import { GameDetailRoutingModule } from "./game-detail-routing-module";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GameDetailComponent],
  imports: [
    CommonModule,
    GameDetailRoutingModule,
    SharedModule,
  ]
})
export class GameDetailModule { }
