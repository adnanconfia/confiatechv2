import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideGoogleAnalytics } from '@hakimio/ngx-google-analytics';


export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes ,withInMemoryScrolling({
    anchorScrolling:'enabled',
    scrollPositionRestoration: "top",
    
    
   
  })), provideAnimations(), provideHttpClient(),provideClientHydration(),provideGoogleAnalytics('G-06BPS7FXZY'), importProvidersFrom([BrowserAnimationsModule])]
};
