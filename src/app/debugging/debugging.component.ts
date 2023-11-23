import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-debugging',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.scss']
})
export class DebuggingComponent extends BaseComponent {

}
