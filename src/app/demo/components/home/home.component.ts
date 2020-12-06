import { Component, OnInit } from '@angular/core';

import { GamesService } from '@core/services/games.service'
import { CategoryList, SingleCategory } from '@core/models/games.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: CategoryList;
  filteredGameList = [];
  games = [];
  searchText = '';
  bar = 'World';
  bar2 = 'Worldq';

  categoryData = [
    {name: 'Popular Games', url: '/category/popular-games', img: 'assets/images/stickers2.png'},
    {name: 'Video Slots', url: '/category/video-slots', img: 'assets/images/stickers2.png'},
    {name: 'Table Games', url: '/category/table-games', img: 'assets/images/stickers2.png'},
    {name: 'Video Poker', url: '/category/video-poker', img: 'assets/images/stickers2.png'},
    {name: 'Classic Slots', url: '/category/classic-slots', img: 'assets/images/stickers2.png'},
    {name: 'Jackpot Games', url: '/category/jackpot-games', img: 'assets/images/stickers2.png'},
    {name: 'Other Games', url: '/category/other-games', img: 'assets/images/stickers2.png'},
  ];

  constructor(
    private gamesService: GamesService,
  ) { }

  ngOnInit(): void {
  }

  getCategories(){
    this.gamesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getGames(category: string) {
    this.gamesService.getGames(category).subscribe((games: SingleCategory) => {
      this.games = games?._embedded.games;
      this.filteredGameList = this.cloneList(this.games);
    });
  }

  updateGameList(e) {
    this.searchText = e.toLowerCase();
    this.filteredGameList = this.cloneList(this.games.filter((g => g.name.toLowerCase().indexOf(this.searchText) > -1)));
  }

  cloneList(list) {
    return JSON.parse(JSON.stringify(list));
  }

  modelChangeFn(e) {
    this.bar = e;
  }

  percent;

  onPercentChange(percent) {
    console.log('here');  

    this.percent = percent;
  }
}
