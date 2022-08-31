import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, tap } from 'rxjs';
import { Character, CharactersResponse } from '../models/data.interface';

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
  private _charactersSubject = new BehaviorSubject<Character[]>([]);
  
  get characters() {
    return this._charactersSubject.asObservable();
  }
  set charactersData(character: Character[]) {
    this._charactersSubject.next(character);
  }

  constructor(private _apollo: Apollo) {
    this.getDataApi();
  }

  private getDataApi(): void {
    this._apollo
      .watchQuery<CharactersResponse>({
        query: QUERY,
      })
      .valueChanges.pipe(
        tap(( {data} ) => {
          this.charactersData = data.characters.results;
        })
      )
      .subscribe();
  }
}
