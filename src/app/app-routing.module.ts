import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoCrystalComponent } from './crystal/crystal';

const routes: Routes = [
  { path: 'crystal', component: DemoCrystalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
