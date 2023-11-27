import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

enum ROUTE_TYPE {
  HOME = 'HOME', 
  STAND_ALONE = 'STAND_ALONE',
  NOTES = 'NOTES',
  DIRECTIVE_COMPOSITION = 'DIRECTIVE_COMPOSITION',
  IMAGE_DIRECTIVE = 'IMAGE_DIRECTIVE',
  ROUTE_UNWRAP_DEFAULT = 'ROUTE_UNWRAP_DEFAULT',
  AUTHORED_CODE = 'AUTHORED_CODE',
  IGNORED_LIST = 'IGNORED_LIST',
  RANGE_SELECTION_SUPPORT = 'RANGE_SELECTION_SUPPORT',
  CDK_LIST_BOX = 'CDK_LIST_BOX',
  ESBUILD = 'ESBUILD',
  LANGUAGE_SERVIVE_IMPROVEMENT = 'LANGUAGE_SERVIVE_IMPROVEMENT',
  DATE_PIPE = 'DATE_PIPE',
  FUNTIONAL_ROUTE_GUARDS = 'FUNTIONAL_ROUTE_GUARDS'
};

const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/standalone', ROUTE_TYPE.STAND_ALONE],
  ['/directive', ROUTE_TYPE.DIRECTIVE_COMPOSITION],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/image-directive', ROUTE_TYPE.IMAGE_DIRECTIVE],
  ['/route-unwrap', ROUTE_TYPE.ROUTE_UNWRAP_DEFAULT],
  ['/authored-code', ROUTE_TYPE.AUTHORED_CODE],
  ['/ignored-list', ROUTE_TYPE.IGNORED_LIST],
  ['/range-selection-support', ROUTE_TYPE.RANGE_SELECTION_SUPPORT],
  ['/cdk-list-box', ROUTE_TYPE.CDK_LIST_BOX],
  ['/esbuild', ROUTE_TYPE.ESBUILD],
  ['/language-service-improvement', ROUTE_TYPE.LANGUAGE_SERVIVE_IMPROVEMENT],
  ['/date-pipe', ROUTE_TYPE.DATE_PIPE],
  ['/route-guard', ROUTE_TYPE.FUNTIONAL_ROUTE_GUARDS]
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes of Angular v15';
  updateTime = '2023/11/27';
  selectedRoute = ROUTE_TYPE.HOME;
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
