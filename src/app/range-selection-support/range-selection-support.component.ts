import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-range-selection-support',
  standalone: true,
  imports: [
    CommonModule, 
    SectionContainerComponent,
    FormsModule,
    MatSliderModule
  ],
  templateUrl: './range-selection-support.component.html',
  styleUrls: ['./range-selection-support.component.scss']
})
export class RangeSelectionSupportComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.RANGE_SELECTION_SUPPORT);
  escapeHtml = escapeHtml;

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  startValue = 30;
  endValue = 70;

  instruction = `
  //1. Install the Angular Material and CDK 
  npm install --save @angular/material@^15
  npm install --save @angular/cdk@^15

  //2. Create a new stand-alone components
  ng g c range-selecion-support --standalone

  //3. Update the template
  <mat-slider
    class="example-margin"
    [disabled]="disabled"
    [max]="max"
    [min]="min"
    [step]="step"
    [discrete]="thumbLabel"
    [showTickMarks]="showTicks">
    <input matSliderStartThumb
      [(ngModel)]="startValue"
      #slider>
    <input
      matSliderEndThumb
      [(ngModel)]="endValue"
      #slider>
  </mat-slider>

  //4. Update the component
  export class RangeSelectionSupportComponent {
    disabled = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    startValue = 30;
    endValue = 70;
  }
  `;
}
