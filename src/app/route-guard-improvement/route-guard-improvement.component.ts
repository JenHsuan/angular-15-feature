import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-route-guard-improvement',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './route-guard-improvement.component.html',
  styleUrls: ['./route-guard-improvement.component.scss']
})
export class RouteGuardImprovementComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.FUNTIONAL_ROUTE_GUARDS);
  escapeHtml = escapeHtml;
  
  code = `
  //1. Create the service for logging in
  ng g s login
  
  //2. Update the login service
  @Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    isLoggedIn() {
      return true;
    }
  }
  
  //3. Update the app-routing.module.ts
  export const routes: Routes = [
    ...,
    {
      path: 'route-guard',
      //Legacy way too add a route guard
      //canActivate: [ LoginGuardService ],
  
      //functional route guards
      canActivate: [() => inject(LoginService).isLoggedIn()],
      loadComponent: () => import('../app/route-guard-improvement.component')
                            .then(m => m.RouteGuardImprovementComponent),
      title: 'Angular 15 - Functional Route Guard'
    }
  ] 
  `;
}
