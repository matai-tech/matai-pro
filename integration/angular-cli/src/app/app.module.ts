import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MataiProModule } from 'matai-pro';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MataiProModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
