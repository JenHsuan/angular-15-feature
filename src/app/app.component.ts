import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

enum ROUTE_TYPE {
  STAND_ALONE = 'STAND_ALONE',
  NOTES = 'NOTES',
  DIRECTIVE_COMPOSITION = 'DIRECTIVE_COMPOSITION',
};

const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/standalone', ROUTE_TYPE.STAND_ALONE],
  ['/directive', ROUTE_TYPE.DIRECTIVE_COMPOSITION],
  ['/notes', ROUTE_TYPE.NOTES],
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes of Angular v15 (updated at 2023/11/21)';
  selectedRoute = ROUTE_TYPE.STAND_ALONE;
  route: string;

  constructor(
    private location: Location, 
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
        this.selectedRoute = ROUTE_MAP.get(this.route) || ROUTE_TYPE.STAND_ALONE;
      } else {
        this.route = 'Home';
      }
    });
  }

  changeRoute(path: string) {
    this.router.navigate([path]);
  }

  getRouteStyle(path: string) {
    return this.selectedRoute === path ? 'tab-item current' : 'tab-item';
  }
}
