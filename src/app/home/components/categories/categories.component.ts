import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryData = [
    {name: 'Popular Games', url: '/category/popular-games', img: 'assets/images/stickers2.png'},
    {name: 'Video Slots', url: '/category/video-slots', img: 'assets/images/stickers2.png'},
    {name: 'Table Games', url: '/category/table-games', img: 'assets/images/stickers2.png'},
    {name: 'Video Poker', url: '/category/video-poker', img: 'assets/images/stickers2.png'},
    {name: 'Classic Slots', url: '/category/classic-slots', img: 'assets/images/stickers2.png'},
    {name: 'Jackpot Games', url: '/category/jackpot-games', img: 'assets/images/stickers2.png'},
    {name: 'Other Games', url: '/category/other-games', img: 'assets/images/stickers2.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
