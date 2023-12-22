import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NOTES);

  escapeHtml = escapeHtml;
  
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
