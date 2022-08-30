import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card.component';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '@app/primeng/primeng.module';
import { CharacterDetailsModule } from '../character-details/character-details.module';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [CommonModule, CharacterDetailsModule, RouterModule, PrimeNgModule],
  exports: [CharacterCardComponent],
})
export class CharacterCardModule {}
