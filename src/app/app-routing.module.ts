import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'standalone'},
  //lazy loading
  {
    path: 'standalone',
    loadComponent: () => import('../app/stand-alone/stand-alone.component').then(m => m.StandAloneComponent),
    title: 'Stand-alone component'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
