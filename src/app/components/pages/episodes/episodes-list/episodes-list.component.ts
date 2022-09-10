import { Component } from '@angular/core';
import { Episode } from '@app/shared/models/data.interface';
import { EpisodesService } from '@app/shared/services/episodes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes-list.component.html',
})
export class EpisodesListComponent {
  episodes$: Observable<Episode[]>;
  displayEpisodeDetails: boolean = false;
  selectedEpisodeName: string = '';

  constructor(private _episodesService: EpisodesService) {
    this.episodes$ = this._episodesService.getDataApi()
  }

  openEpisodeDetails(name: string): void {
    this.displayEpisodeDetails = true;
    this.selectedEpisodeName = name;
  }
}
