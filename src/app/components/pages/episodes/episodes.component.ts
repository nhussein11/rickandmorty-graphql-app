import { Component, OnInit } from '@angular/core';
import { Episode } from '@app/shared/models/data.interface';
import { EpisodesService } from '@app/shared/services/episodes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent {
  episodes$: Observable<Episode[]>;
  
  constructor(private _episodesService: EpisodesService) {
    this.episodes$ = this._episodesService.episodes;
  }
}
