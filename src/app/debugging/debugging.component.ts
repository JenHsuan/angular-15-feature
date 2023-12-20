import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-debugging',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.scss']
})
export class DebuggingComponent {

}
