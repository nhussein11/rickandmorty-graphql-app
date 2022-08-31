import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { Episode } from '@app/shared/models/data.interface';
import { PrimeNgModule } from '@app/primeng/primeng.module';

@NgModule({
  declarations: [EpisodesComponent],
  imports: [CommonModule, EpisodesRoutingModule,PrimeNgModule],
})
export class EpisodesModule {}
