import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-ignored-list',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './ignored-list.component.html',
  styleUrls: ['./ignored-list.component.scss']
})
export class IgnoredListComponent {
}
