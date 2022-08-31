import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesListRoutingModule } from './episodes-list-routing.module';
import { EpisodesListComponent } from './episodes-list.component';

import { PrimeNgModule } from '@app/primeng/primeng.module';
import { EpisodesDetailsModule } from '../episodes-details/episodes-details.module';

@NgModule({
  declarations: [EpisodesListComponent],
  imports: [CommonModule, EpisodesListRoutingModule,PrimeNgModule,EpisodesDetailsModule],
})
export class EpisodesListModule {}
