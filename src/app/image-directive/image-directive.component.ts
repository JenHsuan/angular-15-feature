import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-image-directive',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SectionContainerComponent],
  // Call the function and add the result to the `providers` array:
  providers: [
    provideImgixLoader("https://cdn-images-1.medium.com/"),
  ],
  templateUrl: './image-directive.component.html',
  styleUrls: ['./image-directive.component.scss']
})
export class ImageDirectiveComponent {
  escapeHtml = escapeHtml;
  
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

  preconnectCode = `
  <link rel="preconnect" href="https://example.com" />
  `;
  preloadCode = `
  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />
  `;
}
