import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mta-chemical-element-detail',
  templateUrl: './chemical-element-detail.component.html',
  styles: [`
    .container {
      display: flex;
      width: 100%;
    }
    .item {
      flex: 1;
      padding: 0.2vw;
    }
    .item-3x {
      flex: 3;
      padding: 0.5vw;
      color: #888;
    }
    table {
      font-size: 0.9vw;
      width: 100%;
    }
    b {
      font-size: 0.9vw;
    }
    td {
      width: 33%;
    }
    td.indexer {
      width: 67%;
    }
  `]
})
export class MtaChemicalElementDetailComponent {
  @Input() isShowElDetail: boolean;
  @Input() element;

  constructor() { }

}
