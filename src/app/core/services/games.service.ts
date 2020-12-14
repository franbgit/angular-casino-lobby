import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { publishReplay, refCount, retry, catchError } from 'rxjs/operators';

import { CategoryList, SingleCategory } from '@core/models/games.model';
import { ApiCache } from '@core/models/apicache.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  apiCache: ApiCache = {
    categories: null,
    games: {},
  };

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  getCategories(): Observable<CategoryList> {
    if (!this.apiCache.categories) {
      this.apiCache.categories = this.http
        .get<CategoryList>(
          `${this.apiUrl}/game-categories?brand=cherrycasino.desktop&locale=en`
        )
        .pipe(
          publishReplay(1), // cache the latest emitted
          refCount(), // keep the Observable alive as long as there are any Subscribers
          retry(1),
          catchError(this.handleError)
        );
    }

    return this.apiCache.categories;
  }

  getGames(category: string): Observable<SingleCategory> {
    if (!this.apiCache.games[category]) {
      // Cache it once if apiCache value is false
      this.apiCache.games[category] = this.http
        .get<SingleCategory>(
          `${this.apiUrl}/game-categories/${category}?brand=cherrycasino.desktop&locale=en`
        )
        .pipe(
          publishReplay(1), // cache the latest emitted
          refCount(), // keep the Observable alive as long as there are any subscribers
          retry(1),
          catchError(this.handleError)
        );
    }

    return this.apiCache.games[category];
  }

  clearCache(): void {
    this.apiCache = {
      categories: null,
      games: {},
    };
  }

  handleError(error: {
    error: { message: any };
    status: any;
    message: any;
  }): Observable<never> {
    const errorMessage =
      error.error instanceof ErrorEvent
        ? `Error: ${error.error.message}` // client-side error
        : `Error Code: ${error.status}\nMessage: ${error.message}`; // server-side error
    console.log(errorMessage);
    window.alert('An error has occurred, please try again later');
    return throwError(errorMessage);
  }
}
