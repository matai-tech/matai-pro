import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mta-periodic-table-row',
  template: `
  <div class="container">
    <div class="item" *ngFor="let item of periodicRow">
      <ng-container *ngIf="item.symbol">
        <mta-chemical-element [element]="item"></mta-chemical-element>
      </ng-container>
      <div class="index" *ngIf="item.family">{{item.family}}</div>
      <ng-template #textTemplate *ngIf="item.text">{{item.text}}</ng-template>
    </div>
  </div>
  `,
  styles: [
    `
    .container {
      display: flex;
    }
    .item {
      flex: 1;
      margin: 2px;
      user-select: none;
    }
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
    .index {
      font-family: 'Times New Roman', Times, serif;
      font-size: 1vw;
      text-align: center;
      padding-top: calc(100% - 1.2em);
      color: #cfd8dc;
      border-bottom: 1px ridge #cfd8dc;
    }
    `
  ]
})
export class PeriodicTableRowComponent implements OnInit {
  // 同一周期的元素集合
  @Input() periodicRow = [];

  constructor() { }

  ngOnInit() {
  }

}
