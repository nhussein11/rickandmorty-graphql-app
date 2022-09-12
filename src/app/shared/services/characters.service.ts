import { Injectable } from '@angular/core';
import { Apollo, gql, TypedDocumentNode } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private _apollo: Apollo) {}

  public getDataApi(
    query?: TypedDocumentNode<unknown, unknown>,
    filter?: object
  ) {
    const QUERY = query
      ? query
      : gql`
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

    const FILTER = filter ? filter : {};

    return this._apollo
      .watchQuery({
        query: QUERY,
        variables: FILTER,
      })
      .valueChanges.pipe(
        map(({ data }: any) => {
          return data.characters.results;
        })
      );
  }
}
