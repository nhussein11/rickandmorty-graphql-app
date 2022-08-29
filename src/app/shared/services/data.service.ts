import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';
import { Character, DataResponse, Episode } from '../models/data.interface';

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
  private _episodeSubject = new BehaviorSubject<Episode[] | null>(null);
  public episodes$ = this._episodeSubject.asObservable();

  private _charactersSubject = new BehaviorSubject<Character[] | null>(null);
  public characters$ = this._charactersSubject.asObservable();

  constructor(private _apollo: Apollo) {
    this.getDataApi();
  }

  private getDataApi(): void {
    this._apollo
      .watchQuery<DataResponse>({
        query: QUERY,
      })
      .valueChanges.pipe(
        take(1),
        tap(({ data }) => {
          const { characters, episodes } = data;
          this._charactersSubject.next(characters.results);
          this._episodeSubject.next(episodes.results);
        })
      )
      .subscribe();
  }
}
