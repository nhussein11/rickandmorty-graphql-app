import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { EpisodeDetails } from '@app/shared/models/data.interface';
import { EpisodesService } from '@app/shared/services/episodes.service';
import { gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';

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
@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesDetailsComponent implements OnChanges {
  @Input() display: boolean = false;
  @Input() nameToFilter: string = '';

  @Output() closeEpisodeDetails: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  render: boolean = false;
  episodeDetails$!: Observable<EpisodeDetails>;

  constructor(private _episodesService: EpisodesService) {}

  ngOnChanges(): void {
    const FILTER = {
      name: this.nameToFilter,
    };
    this.episodeDetails$ = this._episodesService
      .getDataApi(QUERY, FILTER)
      .pipe(map((episodes) => episodes[0]));
  }

  closeDialog(): void {
    this.closeEpisodeDetails.emit(false);
  }
}
