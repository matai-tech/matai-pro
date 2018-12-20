import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoCrystalComponent } from './crystal/crystal';
import { DemoPeriodicTableComponent } from './periodic-table/periodic-table';

const routes: Routes = [
  { path: '', redirectTo: 'crystal', pathMatch: 'full' },
  { path: 'crystal', component: DemoCrystalComponent },
  { path: 'periodic-table', component: DemoPeriodicTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
