import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesDetailsRoutingModule } from './episodes-details-routing.module';
import { EpisodesDetailsComponent } from './episodes-details.component';
import { PrimeNgModule } from '@app/primeng/primeng.module';


@NgModule({
  declarations: [
    EpisodesDetailsComponent
  ],
  imports: [
    CommonModule,
    EpisodesDetailsRoutingModule,
    PrimeNgModule
  ],
  exports:[EpisodesDetailsComponent]
})
export class EpisodesDetailsModule { }
