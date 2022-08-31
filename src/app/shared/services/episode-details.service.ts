import { Injectable, Optional } from '@angular/core';
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
  private _nameToFilter: string = '';

  get episodeDetails(): any {
    return this._episode.asObservable();
  }
  set EpisodeDetailsData(episode: EpisodeDetails) {
    this._episode.next(episode);
  }
  set name(nameToFilter: string) {
    this._nameToFilter = nameToFilter;
  }
  constructor(private _apollo: Apollo) {
    this.getEpisodeDetailsData();
  }

  private getEpisodeDetailsData(): void {
    this._apollo
      .watchQuery({
        query: QUERY,
        variables: {
          name: this._nameToFilter,
        },
      })
      .valueChanges.pipe(
        tap(({ data }: any) => {
          this._episode = data.episodes.results;
          console.log(data.episodes.results);
          console.log(this._nameToFilter)
          
        })
      )
      .subscribe();
  }
}
