import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-image-directive',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  // Call the function and add the result to the `providers` array:
  providers: [
    provideImgixLoader("https://cdn-images-1.medium.com/"),
  ],
  templateUrl: './image-directive.component.html',
  styleUrls: ['./image-directive.component.scss']
})
export class ImageDirectiveComponent extends BaseComponent {
  code = `
  //1. import NgOptimizedImage and set the provideImgixLoader
  
  @Component({
    ...,
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    providers: [
      provideImgixLoader("https://cdn-images-1.medium.com/"),
    ],
    ...
  })

  //2. Use the img in the template with the width and the height
  <img ngSrc="1*4IBpfSE-wcflFJ7T0XW8Mg.png" width="800" height="400">
  `;

}
