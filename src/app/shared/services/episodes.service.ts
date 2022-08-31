import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, tap } from 'rxjs';
import { Episode, EpisodesResponse } from '../models/data.interface';

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
  private _episodesSubject = new BehaviorSubject<Episode[]>([]);

  get episodes() {
    return this._episodesSubject.asObservable();
  }

  set episodesData(episodes: Episode[]) {
    this._episodesSubject.next(episodes);
  }

  constructor(private _apollo: Apollo) {
    this.getDataApi();
  }

  private getDataApi() {
    this._apollo
      .watchQuery<EpisodesResponse>({
        query: QUERY,
      })
      .valueChanges.pipe(
        tap(({ data }) => {
          this.episodesData = data.episodes.results;
        })
      )
      .subscribe();
  }
}
