import { NgModule } from '@angular/core';

import { CrystalComponent } from './crystal/crystal.component';

export * from './crystal';

@NgModule({
  imports: [],
  exports: [
    CrystalComponent
  ],
  declarations: [
    CrystalComponent
  ],
  providers: [],
})
export class MataiProModule { }
