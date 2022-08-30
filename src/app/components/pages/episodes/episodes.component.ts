import { Component } from '@angular/core';
import { EpisodesService } from '@app/shared/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent {
  episodes$ = this._episodesService.episodes$;
  constructor(private _episodesService: EpisodesService) {}
}
