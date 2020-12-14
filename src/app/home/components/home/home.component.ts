import { Component, OnInit } from '@angular/core';
import { GamesService } from '@core/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoryData = [];
  stage = 'loading';

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getCategories().subscribe((data) => {
      this.categoryData = data._embedded.game_categories;
      this.stage = 'show';
    });
  }
}
