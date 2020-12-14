import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { GameComponent } from './components/game/game.component';

import { MaterialModule } from '@material/material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SingleCategoryComponent,
    GameComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SingleCategoryComponent,
    GameComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
