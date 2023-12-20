import { Component } from '@angular/core';
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-date-pipe',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.scss'],
  providers: [
  ]
})
export class DatePipeComponent {
  escapeHtml = escapeHtml;
  dateTime = new Date();
  instruction = `
  //1. Update the main.ts to provide the deefault datetime format
  bootstrapApplication(AppComponent, {
    providers: [
      ...,
      //defualt date format
      {
        provide: DATE_PIPE_DEFAULT_OPTIONS,
        useValue: {
          dateFormat: 'shortDate'
        }
      }
    ],
  });

  //2. Use the data pipe in the template
  <div>{{ dateTime | date }}</div>
  `;
}
