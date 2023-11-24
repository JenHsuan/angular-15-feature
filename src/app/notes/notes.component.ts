import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent extends BaseComponent {
  instruction = `
  //Legacy
  @Injectable({
    providedIn: NgModule
  })
  export class LoginService {
    ...
  }

  //Angular 15
  @Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    ...
  }
  `;
}
