import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '@app/primeng/primeng.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
