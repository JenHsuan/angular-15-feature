import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { DirectiveCompositionApiNormalComponent } from './directive-composition-api-normal/directive-composition-api-normal.component';
import { DirectiveCompositionApiDirectiveBgColorDirective } from './directive-composition-api-directive-bg-color/directive-composition-api-directive-bg-color.directive';
import { DirectiveCompositionApiAppliedComponent } from './directive-composition-api-applied/directive-composition-api-applied.component';

@Component({
  selector: 'app-directive-composition-api',
  standalone: true,
  imports: [
    CommonModule,
    DirectiveCompositionApiNormalComponent,
    DirectiveCompositionApiAppliedComponent,
    DirectiveCompositionApiDirectiveBgColorDirective
  ],
  templateUrl: './directive-composition-api.component.html',
  styleUrls: ['./directive-composition-api.component.scss']
})
export class DirectiveCompositionApiComponent extends BaseComponent {
  codeForDirective = `
  //1. Create a stand-alone component and a stand-alone directive
  
  ng g d directive-composition-api-directive-bg-color --standalone
  ng g c directive-composition-api-normal --standalone

  //2. Update the directive-composition-api-directive-bg-color

  import { Directive, HostBinding, Input } from '@angular/core';
  
  @Directive({
    selector: '[appDirectiveCompositionApiDirectiveBgColor]',
    standalone: true
  })
  export class DirectiveCompositionApiDirectiveBgColorDirective {
    @Input() @HostBinding('style.background-color') bgColor = 'yellow';
    @HostBinding('style.display') display = 'inline-block';
  }

  //3. Add the directive on the directive-composition-api-normal
  <app-directive-composition-api-normal
    appDirectiveCompositionApiDirectiveBgColor bgColor="red">
  </app-directive-composition-api-normal>
  `;

  codeForComponent = `
  //1. Create a stand-alone component and a stand-alone directive
  
  ng g d directive-composition-api-directive-bg-color --standalone
  ng g c directive-composition-api-applied --standalone
  
  //2. Update the directive-composition-api-applied
  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { DirectiveCompositionApiDirectiveBgColorDirective }
  from '../directive-composition-api-directive-bg-color.directive';

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

  //3. Use the directive-composition-api-applied
  <app-directive-composition-api-applied backgroundColor="red">
  </app-directive-composition-api-applied>
  `;
}
