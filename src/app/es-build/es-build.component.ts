import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-es-build',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './es-build.component.html',
  styleUrls: ['./es-build.component.scss']
})
export class EsBuildComponent {
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
