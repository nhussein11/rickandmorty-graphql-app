import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { EpisodeDetails } from '@app/shared/models/data.interface';
import { EpisodeDetailsService } from '@app/shared/services/episode-details.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.component.html',
  providers: [
    EpisodeDetailsService,
    { provide: 'nameToFilter', useValue: 'Pilot' },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesDetailsComponent implements OnChanges {
  @Input() display: boolean = false;
  @Input() nameToFilter: string = '';

  @Output() closeEpisodeDetails: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  render: boolean = false;
  episodeDetails$!: Observable<EpisodeDetails>;

  constructor(private _episodeDetailsService:EpisodeDetailsService) {}

  ngOnChanges(): void {
    this._episodeDetailsService.getEpisodeDetailsData(this.nameToFilter);
    this.episodeDetails$ = this._episodeDetailsService.episodeDetails;
  }

  closeDialog(): void {
    this.closeEpisodeDetails.emit(false);
  }
}
