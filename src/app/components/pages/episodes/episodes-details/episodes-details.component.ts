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

  episodeDetails$: Observable<EpisodeDetails>;

  constructor(private _episodeDetailsService: EpisodeDetailsService) {
    this._episodeDetailsService.getEpisodeDetailsData(this.nameToFilter);
    this.episodeDetails$ = this._episodeDetailsService.episodeDetails;
    console.log(this.episodeDetails$)
    
  }

  closeDialog(): void {
    this.closeEpisodeDetails.emit(false);
  }
}
