import { Component } from '@angular/core';
import { appLayout } from './app.config';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  config = appLayout;
}
