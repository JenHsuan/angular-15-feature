import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './service/login.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadComponent: () => import('../app/home/home.component').then(m => m.HomeComponent),
    title: 'Angular 15'
  },
  //lazy loading
  {
    path: 'standalone',
    loadComponent: () => import('../app/stand-alone/stand-alone.component').then(m => m.StandAloneComponent),
    title: 'Angular 15 - Standalone component'
  },
  {
    path: 'notes',
    loadComponent: () => import('../app/notes/notes.component').then(m => m.NotesComponent),
    title: 'Angular 15 - notes'
  },
  {
    path: 'directive',
    loadComponent: () => import('../app/directive-composition-api/directive-composition-api.component').then(m => m.DirectiveCompositionApiComponent),
    title: 'Angular 15 - Directive Composition API'
  },
  {
    path: 'image-directive',
    loadComponent: () => import('../app/image-directive/image-directive.component').then(m => m.ImageDirectiveComponent),
    title: 'Angular 15 - Image Directive'
  },
  {
    path: 'route-unwrap',
    loadComponent: () => import('../app/route-unwrap-default/route-unwrap-default.component'),
    title: 'Angular 15 - Route Unwrap Default'
  },
  {
    path: 'authored-code',
    loadComponent: () => import('../app/debugging/debugging.component').then(m => m.DebuggingComponent),
    title: 'Angular 15 - Authored Code'
  },
  {
    path: 'ignored-list',
    loadComponent: () => import('../app/ignored-list/ignored-list.component').then(m => m.IgnoredListComponent),
    title: 'Angular 15 - Ignored List'
  },
  {
    path: 'range-selection-support',
    loadComponent: () => import('../app/range-selection-support/range-selection-support.component').then(m => m.RangeSelectionSupportComponent),
    title: 'Angular 15 - Range Selection Support'
  },
  {
    path: 'cdk-list-box',
    loadComponent: () => import('../app/cdk-list-box/cdk-list-box.component').then(m => m.CdkListBoxComponent),
    title: 'Angular 15 - CDK listbox'
  },
  {
    path: 'esbuild',
    loadComponent: () => import('../app/es-build/es-build.component').then(m => m.EsBuildComponent),
    title: 'Angular 15 - esbuild'
  },
  {
    path: 'language-service-improvement',
    loadComponent: () => import('../app/language-service-improvement/language-service-improvement.component').then(m => m.LanguageServiceImprovementComponent),
    title: 'Angular 15 - Language Service Improvement'
  },
  {
    path: 'date-pipe',
    loadComponent: () => import('../app/date-pipe/date-pipe.component').then(m => m.DatePipeComponent),
    title: 'Angular 15 - Date Pipe'
  },
  {
    path: 'route-guard',
    //Legacy way too add a route guard
    //canActivate: [ LoginGuardService ],

    //functional route guards
    canActivate: [() => inject(LoginService).isLoggedIn()],
    loadComponent: () => import('../app/route-guard-improvement/route-guard-improvement.component').then(m => m.RouteGuardImprovementComponent),
    title: 'Angular 15 - Functional Route Guard'
  },
  {
    path: 'breaking-changes',
    loadComponent: () => import('../app/breaking-changes/breaking-changes.component'),
    title: 'Angular 16 - breaking changes'
  },
  {
    path: 'deprecations',
    loadComponent: () => import('../app/deprecations/deprecations.component'),
    title: 'Angular 16 - deprecations'
  },
  {
    path: 'documents',
    loadComponent: () => import('../app/documents/documents.component'),
    title: 'Angular 16 - documents'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
