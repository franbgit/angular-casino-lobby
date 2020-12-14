import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Apollo, QueryRef } from 'apollo-angular';

import { LobbyData } from '@core/models/lobby.model';
import { LOBBY_QUERY } from '../../../graphql';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  games = [];
  debounceTime = 200;
  gamesSearched = [];
  inputText = '';
  stage = 'loading';

  private modelChanged: Subject<string> = new Subject<string>();
  private query: QueryRef<LobbyData>;
  private subscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.query = this.apollo.watchQuery<any, LobbyData>({
      query: LOBBY_QUERY,
    });

    this.query.valueChanges.subscribe((result) => {
      if (
        result &&
        result.data &&
        result.data.lobby &&
        result.data.lobby.games.length > 0
      ) {
        this.games = result.data.lobby.games;
      }
      this.stage = 'show';
    });

    this.createInputDelay();
  }

  createInputDelay(): void {
    this.subscription = this.modelChanged
      .pipe(debounceTime(this.debounceTime))
      .subscribe(() => {
        this.search();
      });
  }

  search(): void {
    if (this.inputText) {
      const input = this.inputText.toLowerCase();
      this.gamesSearched = this.games.filter(
        (game) => game.name.toLowerCase().indexOf(input) > -1
      );
    } else {
      this.gamesSearched = [];
    }
  }

  setValue(e: string): void {
    this.inputText = e;
  }

  inputChanged(): void {
    this.modelChanged.next();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
