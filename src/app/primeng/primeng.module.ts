import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  exports: [ButtonModule, CardModule, TabMenuModule],
})
export class PrimeNgModule {}
