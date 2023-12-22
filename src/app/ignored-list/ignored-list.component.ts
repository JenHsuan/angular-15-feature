import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-ignored-list',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './ignored-list.component.html',
  styleUrls: ['./ignored-list.component.scss']
})
export class IgnoredListComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.IGNORED_LIST);
}
