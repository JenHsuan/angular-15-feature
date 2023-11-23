import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-route-unwrap-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-unwrap-default.component.html',
  styleUrls: ['./route-unwrap-default.component.scss']
})
export default class RouteUnwrapDefaultComponent extends BaseComponent {
  code = `
  //The oririnal way to add a new route
  {
    path: 'route-unwrap',
    loadComponent: () => import('../app/route-unwrap-default/route-unwrap-default.component')
                          .then(m => m.RouteUnwrapDefaultComponent),
    title: 'Angular 15 - Route Unwrap Default'
  },
  
  //1. Add the default behind the export
  export default class RouteUnwrapDefaultComponent {
    ...
  }

  //2. Update the app.routing.module.ts

  {
    path: 'route-unwrap',
    loadComponent: () => import('../app/route-unwrap-default/route-unwrap-default.component'),
    title: 'Angular 15 - Route Unwrap Default'
  },
  `;
}
