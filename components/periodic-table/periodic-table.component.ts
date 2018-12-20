import { Component, OnInit, OnChanges, HostListener, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChemicalElement } from './interface';
import { PERIOD_1, PERIOD_2, PERIOD_3, LAN_SERIES, A_SERIES, PERIOD_4, PERIOD_0, PERIOD_5, PERIOD_6, PERIOD_7 } from './constants';
import { PeriodicTableService } from './periodic-table.service';

@Component({
  selector: 'mta-periodic-table',
  templateUrl: './periodic-table.component.html',
  styles: [`
  .align-right {
    text-align: right;
  }
  .left-box {
    flex: 3;
  }
  .middle-box {
    flex: 8;
  }
  .right-box {
    flex: 7;
  }
  `]
})
export class PeriodicTableComponent implements OnInit, OnChanges,  OnDestroy {
  period0 = PERIOD_0;
  period1 = PERIOD_1;
  period2 = PERIOD_2;
  period3 = PERIOD_3;
  period4 = PERIOD_4;
  period5 = PERIOD_5;
  period6 = PERIOD_6;
  period7 = PERIOD_7;
  periodLan = LAN_SERIES;
  periodA = A_SERIES;

  // @Input() isShowElDetail = true; // 是否展示元素详情
  // @Input() maxSelect: number; // 最大可以选择元素的个数
  // @Input() canSelectElements = []; // 关联可以选择的元素string[],例['h', 'li', 'be']

  change$: Subscription;

  constructor(
    public service: PeriodicTableService
  ) { }

  @Output() elementChange: EventEmitter<object> = new EventEmitter();

  ngOnInit(): void {
    this.change$ = this.service.elementChange$.subscribe((e: ChemicalElement) => {
      this.elementChange.emit(e);
    });
  }

  ngOnChanges(): void {
    // if (this.canSelectElements === undefined || !(this.canSelectElements instanceof Array)) {
    //   this.canSelectElements = [];
    //   for (const key in this.e) {
    //     if (key) {
    //       this.canSelectElements.push(key);
    //     }
    //   }
    // } else {
    //   this.canSelectElements = this.canSelectElements.concat(this.service.selectedElements);
    //   const arr = [];
    //   for (const item of this.canSelectElements) {
    //     arr.push(item.toLocaleLowerCase());
    //   }
    //   this.canSelectElements = arr;
    // }
    // this.service.setCanSelectElements(this.canSelectElements);
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
  }
}
