import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-es-build',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './es-build.component.html',
  styleUrls: ['./es-build.component.scss']
})
export class EsBuildComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.ESBUILD);
  escapeHtml = escapeHtml;

  steps = `
  //1. Update the angular.json file
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:browser-esbuild",
      ...
    }
  }
  
  //2. Build the project
  ng build --watch`;
}
