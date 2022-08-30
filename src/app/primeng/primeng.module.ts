import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DialogModule,
    ListboxModule,
    TabMenuModule,
  ],
})
export class PrimeNgModule {}
