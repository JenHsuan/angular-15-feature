import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-es-build',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './es-build.component.html',
  styleUrls: ['./es-build.component.scss']
})
export class EsBuildComponent extends BaseComponent {
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
