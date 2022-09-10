import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client';
import { Apollo, gql, TypedDocumentNode } from 'apollo-angular';
import { map, of } from 'rxjs';
import { Episode } from '../models/data.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  constructor(private _apollo: Apollo) {}

  public getDataApi(query?: TypedDocumentNode) {
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

    return this._apollo
      .watchQuery({
        query: QUERY,
        variables: {
          name,
        },
      })
      .valueChanges.pipe(
        map(({ data }: any) => {
          return data.episodes.results
        })
      )

  }
}
