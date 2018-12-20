import { Component, OnInit } from '@angular/core';
import { PeriodicTableService } from 'mta-pro';

@Component({
  selector: 'demo-periodic-table',
  templateUrl: './periodic-table.html',
  styles: []
})
export class DemoPeriodicTableComponent implements OnInit {
  constructor(public service: PeriodicTableService) {
  }

  reset() {
    this.service.reset();
  }

  ngOnInit() {
  }

}
