import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';
import { Character, DataResponse } from '../models/data.interface';

const QUERY = gql`
{
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
export class CharactersService {
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
          const { characters } = data;
          this._charactersSubject.next(characters.results);
        })
      )
      .subscribe();
  }
}
