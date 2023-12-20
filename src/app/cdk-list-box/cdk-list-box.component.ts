import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JsonPipe} from '@angular/common';
import {CdkListbox, CdkOption} from '@angular/cdk/listbox';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';

const today = new Date();

const formatter = new Intl.DateTimeFormat(undefined, {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});
@Component({
  selector: 'app-cdk-list-box',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent, CdkListbox, CdkOption, JsonPipe],
  templateUrl: './cdk-list-box.component.html',
  styleUrls: ['./cdk-list-box.component.scss']
})
export class CdkListBoxComponent {
  escapeHtml = escapeHtml;
  
  slots = [12, 13, 14, 15].map(
    hour => new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, hour),
  );

  appointment: readonly Date[] = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 14),
  ];

  compareDate(date1: Date, date2: Date) {
    return date1.getTime() === date2.getTime();
  }

  formatTime(date: Date) {
    return formatter.format(date);
  }

  formatAppointment() {
    return this.appointment.map(a => this.formatTime(a));
  }

  instruction = `
  //1. Install the Angular Material and CDK 
  npm install --save @angular/cdk@^15

  //2. Create a new stand-alone components
  ng g c cdk-list-box --standalone

  //3. Update the template
  <div class="example-listbox-container">
      <label class="example-listbox-label" id="example-appointment-label">
        Appointment Time
      </label>
      <ul cdkListbox
        [cdkListboxValue]="appointment"
        [cdkListboxCompareWith]="compareDate"
        (cdkListboxValueChange)="appointment = $event.value"
        aria-labelledby="example-appointment-label"
        class="example-listbox">
        <li *ngFor="let time of slots; track time"
            [cdkOption]="time"
            class="example-option">{{formatTime(time)}}</li>
      </ul>
    </div>
    <p *ngIf="appointment && appointment[0]">
      Your appointment is scheduled for
      <strong>{{formatAppointment() | json}}</strong>&nbsp;
    </p>
  </div>

  //4. Update the component
  export class CdkListBoxComponent extends BaseComponent {
    slots = [12, 13, 14, 15].map(
      hour => new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, hour),
    );
  
    appointment: readonly Date[] = [
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 14),
    ];
  
    compareDate(date1: Date, date2: Date) {
      return date1.getTime() === date2.getTime();
    }
  
    formatTime(date: Date) {
      return formatter.format(date);
    }
  
    formatAppointment() {
      return this.appointment.map(a => this.formatTime(a));
    }
  }

  //5. Update SCSS file
  .example-listbox-container {
    display: block;
    width: 250px;
    border: 1px solid black;
  }
  
  .example-listbox-label {
    display: block;
    padding: 5px;
  }
  
  .example-listbox {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .example-option {
    position: relative;
    padding: 5px 5px 5px 25px;
  }
  
  .example-option[aria-selected='true']::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-size: cover;
    position: absolute;
    left: 2px;
  }
  
  .example-option:focus {
    background: rgba(0, 0, 0, 0.2);
  }  
  `;
}
