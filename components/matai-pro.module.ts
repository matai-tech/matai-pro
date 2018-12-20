import { NgModule } from '@angular/core';

import { CrystalModule } from './crystal/crystal.module';
import { PeriodicTableModule } from './periodic-table/periodic-table.module';

export * from './crystal';
export * from './periodic-table';

@NgModule({
  imports: [],
  exports: [
    CrystalModule,
    PeriodicTableModule
  ],
  declarations: [],
  providers: [],
})
export class MataiProModule { }
