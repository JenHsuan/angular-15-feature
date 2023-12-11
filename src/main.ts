import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app-routing.module';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    //route routing module
    provideRouter(routes, withHashLocation()),

    //defualt date format
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: {
        dateFormat: 'shortDate'
      }
    }
  ],
});

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
