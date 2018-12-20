import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MtaChemicalElementDetailComponent } from './chemical-element/chemical-element-detail.component';
import { MtaChemicalElementComponent } from './chemical-element/chemical-element.component';
import { PeriodicTableComponent } from './periodic-table.component';
import { PeriodicTableService } from './periodic-table.service';
import { PeriodicTableRowComponent } from './periodic-table-row.component';


@NgModule({
  imports: [ CommonModule ],
  declarations: [ PeriodicTableComponent, MtaChemicalElementComponent, MtaChemicalElementDetailComponent, PeriodicTableRowComponent ],
  exports: [ PeriodicTableComponent ],
  providers: [ PeriodicTableService ]
})
export class PeriodicTableModule { }
