import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  exports: [ButtonModule, CardModule, ListboxModule, TabMenuModule],
})
export class PrimeNgModule {}
