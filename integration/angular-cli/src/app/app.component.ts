import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mta-crystal [height]="400" [vectors]="vectors" [points]="points"></mta-crystal>
  <mta-periodic-table></mta-periodic-table>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';

  vectors = [
    { x: 4.9808998108, y: 0, z: 0 },
    { x: -2.4904499054, y: 4.3135857699, z: 0 },
    { x: 0, y: 0, z: 21.1336994171 },
  ];

  points =  [
    {
      element: 'Ni',
      x: 0.3333300050000005,
      y: 0.6666700239999983,
      z: 0E-16,
      sdX: 0,
      sdY: 0,
      sdZ: 0
    },
    {
      element: 'Ni',
      x: 0E-16,
      y: 0E-16,
      z: 0.0962200020000026,
      sdX: 0,
      sdY: 0,
      sdZ: '0'
    }
  ];

}
