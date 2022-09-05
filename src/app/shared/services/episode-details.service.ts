import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { EpisodeDetails } from '../models/data.interface';

const QUERY = gql`
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
@Injectable({
  providedIn: 'root',
})
export class EpisodeDetailsService {
  private _episode = new BehaviorSubject<EpisodeDetails>({} as EpisodeDetails);

  get episodeDetails(): Observable<EpisodeDetails> {
    return this._episode.asObservable();
  }
  set EpisodeDetailsData(episode: EpisodeDetails) {
    this._episode.next(episode);
  }

  constructor(private _apollo: Apollo) {}

  public getEpisodeDetailsData(_name: String): void {
    this._apollo
      .watchQuery({
        query: QUERY,
        variables: {
          name: _name,
        },
      })
      .valueChanges.pipe(
        tap(({ data }: any) => {
          this.EpisodeDetailsData = data.episodes.results[0];
        })
      )
      .subscribe();
  }
}
