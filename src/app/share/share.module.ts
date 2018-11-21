import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NgZorroAntdModule
} from 'ng-zorro-antd';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// import { NzCodeBoxModule } from './nz-codebox/nz-codebox.module';
import { NzHighlightModule } from './nz-highlight/nz-highlight.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzHighlightModule,
    // third libs
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    NzHighlightModule,
    // third libs
    // InfiniteScrollModule,
  ]
})
export class ShareModule { }
