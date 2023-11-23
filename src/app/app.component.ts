import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';

enum ROUTE_TYPE {
  STAND_ALONE = 'STAND_ALONE',
  NOTES = 'NOTES',
  DIRECTIVE_COMPOSITION = 'DIRECTIVE_COMPOSITION',
  IMAGE_DIRECTIVE = 'IMAGE_DIRECTIVE',
  ROUTE_UNWRAP_DEFAULT = 'ROUTE_UNWRAP_DEFAULT',
  AUTHORED_CODE = 'AUTHORED_CODE',
  IGNORED_LIST = 'IGNORED_LIST',
  RANGE_SELECTION_SUPPORT = 'RANGE_SELECTION_SUPPORT',
  CDK_LIST_BOX = 'CDK_LIST_BOX'
};

const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/standalone', ROUTE_TYPE.STAND_ALONE],
  ['/directive', ROUTE_TYPE.DIRECTIVE_COMPOSITION],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/image-directive', ROUTE_TYPE.IMAGE_DIRECTIVE],
  ['/route-unwrap', ROUTE_TYPE.ROUTE_UNWRAP_DEFAULT],
  ['/authored-code', ROUTE_TYPE.AUTHORED_CODE],
  ['/ignored-list', ROUTE_TYPE.IGNORED_LIST],
  ['/range-selection-support', ROUTE_TYPE.RANGE_SELECTION_SUPPORT],
  ['/cdk-list-box', ROUTE_TYPE.CDK_LIST_BOX]
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes of Angular v15 (updated at 2023/11/23)';
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
