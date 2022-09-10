import { Injectable } from '@angular/core';
import { Apollo, gql, TypedDocumentNode } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  constructor(private _apollo: Apollo) {}

  public getDataApi(query?: TypedDocumentNode, filter?: object) {
    const QUERY = query
      ? query
      : gql`
          query ($name: String) {
            episodes(filter: { name: $name }) {
              results {
                id
                name
                episode
                air_date
                characters {
                  name
                }
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
          return data.episodes.results;
        })
      );
  }
}
