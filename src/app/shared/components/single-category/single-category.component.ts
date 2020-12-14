import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Game } from '@core/models/games.model';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss'],
})
export class SingleCategoryComponent implements OnInit, OnChanges {
  @Input() games: Game[];
  filteredGameList = [];
  status = 'show';
  maxGames = 10;
  isThereMore = true;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.maxGames = 10;
    this.isThereMore = this.maxGames < this.games.length;
  }

  showMore(): void {
    this.maxGames += 10;
    this.isThereMore = this.maxGames < this.games.length;
  }
}
