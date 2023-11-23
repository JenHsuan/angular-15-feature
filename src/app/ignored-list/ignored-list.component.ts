import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-ignored-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ignored-list.component.html',
  styleUrls: ['./ignored-list.component.scss']
})
export class IgnoredListComponent extends BaseComponent {
}
