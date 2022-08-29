import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';

const QUERY = gql`
  {
    episodes {
      results {
        name
        episode
      }
    }
    characters {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _episodeSubject = new BehaviorSubject(null);
  episodes$ = this._episodeSubject.asObservable();

  private _charactersSubject = new BehaviorSubject(null);
  characters$ = this._charactersSubject.asObservable();

  constructor(private _apollo:Apollo) {
    this.getDataApi();
  }

  private getDataApi(): void {
    this._apollo.watchQuery<any>({
      query:QUERY
    }).valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const {characters, episodes } = data;
        this._episodeSubject.next(episodes.results);
        this._charactersSubject.next(characters.results);
      })
    ).subscribe();
  }
}
