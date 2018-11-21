import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles  : [
    `
      :host ::ng-deep .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
      }

      :host ::ng-deep .trigger:hover {
        color: #1890ff;
      }

      :host ::ng-deep .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
      }
    `
  ]
})
export class AppComponent {
  title = 'app';
  isCollapsed = false;
}
