import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Episode } from '@app/shared/models/data.interface';
import { EpisodesService } from '@app/shared/services/episodes.service';
import { Observable } from 'rxjs';

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
  episodeDetails$!: Observable<Episode[]>;

  constructor(private _episodesService:EpisodesService) {}

  ngOnChanges(): void {
    // this.episodeDetails$ = this._episodesService.episodes;
    
  }

  closeDialog(): void {
    this.closeEpisodeDetails.emit(false);
  }
}
