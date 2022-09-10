import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsRoutingModule } from './character-details-routing.module';

import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '@app/primeng/primeng.module';
import { CharacterDetailsComponent } from './character-details.component';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [
    CharacterDetailsRoutingModule,
    CommonModule,
    RouterModule,
    PrimeNgModule,
  ],
  exports: [CharacterDetailsComponent],
})
export class CharacterDetailsModule {}
