import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { EpisodeDetails } from '../models/data.interface';
// filter: { name: "Pilot" }
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

  get episodeDetails(): any {
    return this._episode.asObservable();
  }
  set EpisodeDetailsData(episode: EpisodeDetails) {
    this._episode.next(episode);
  }
  constructor(private _apollo: Apollo) {}

  public getEpisodeDetailsData(name: string): void {
    this._apollo
      .watchQuery({
        query: QUERY,
        variables: {
          name: name,
        },
      })
      .valueChanges.pipe(
        tap(({ data }: any) => {
          this._episode = data.episodes.results;
          console.log(data.episodes.results);
          // console.log(QUERY)
        })
      )
      .subscribe();
  }
}
