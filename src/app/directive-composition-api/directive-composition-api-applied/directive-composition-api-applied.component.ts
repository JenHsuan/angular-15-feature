import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveCompositionApiDirectiveBgColorDirective } from '../directive-composition-api-directive-bg-color/directive-composition-api-directive-bg-color.directive';

@Component({
  selector: 'app-directive-composition-api-applied',
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [
    {
      directive: DirectiveCompositionApiDirectiveBgColorDirective,
      inputs: ['bgColor: backgroundColor']
    }
  ],
  templateUrl: './directive-composition-api-applied.component.html',
  styleUrls: ['./directive-composition-api-applied.component.scss']
})
export class DirectiveCompositionApiAppliedComponent {

}
