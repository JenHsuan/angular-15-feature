import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveCompositionApiDirectiveBgColor]',
  standalone: true
})
export class DirectiveCompositionApiDirectiveBgColorDirective {
  @Input() @HostBinding('style.background-color') bgColor = 'yellow';
  @HostBinding('style.display') display = 'inline-block';
}
