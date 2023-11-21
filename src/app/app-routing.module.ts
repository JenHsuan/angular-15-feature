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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
