import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-route-guard-improvement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-guard-improvement.component.html',
  styleUrls: ['./route-guard-improvement.component.scss']
})
export class RouteGuardImprovementComponent extends BaseComponent {
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
