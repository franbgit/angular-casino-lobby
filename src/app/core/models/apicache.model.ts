import { CategoryList, SingleCategory } from './games.model';
import { Observable, throwError } from 'rxjs';

export interface ApiCache {
  categories: Observable<CategoryList>;
  games: Games;
}

interface Games {
  [key: string]: Observable<SingleCategory>;
}
