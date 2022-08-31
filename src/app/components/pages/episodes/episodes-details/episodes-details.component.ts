import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EpisodeDetails } from '@app/shared/models/data.interface';
import { EpisodeDetailsService } from '@app/shared/services/episode-details.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.component.html',
})
export class EpisodesDetailsComponent {
  @Input() display: boolean = false;
  @Input() nameToFilter: string = '';

  @Output() closeEpisodeDetails: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  episodeDetails$!: Observable<EpisodeDetails>;

  constructor(private _episodeDetailsService: EpisodeDetailsService) {
    this._episodeDetailsService.name = this.nameToFilter;
    this.episodeDetails$ = this._episodeDetailsService.episodeDetails;
  }

  closeDialog(): void {
    this.closeEpisodeDetails.emit(false);
  }
}
