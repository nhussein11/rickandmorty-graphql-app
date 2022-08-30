import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';
import { DataResponse, Episode } from '../models/data.interface';

const QUERY = gql`
  {
    episodes {
      results {
        name
        episode
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private _episodeSubject = new BehaviorSubject<Episode[] | null>(null);
  public episodes$ = this._episodeSubject.asObservable();



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
        tap((resp) => {
          const { episodes } = resp.data;
          this._episodeSubject.next(episodes.results);
        })
      )
      .subscribe();
  }
}
