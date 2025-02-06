import { ApplicationConfig, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideGoogleAnalytics } from '@hakimio/ngx-google-analytics';

export const googleAnalyticsProviders = makeEnvironmentProviders([
  provideGoogleAnalytics('G-06BPS7FXZY')
]);
export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes ,withInMemoryScrolling({
    anchorScrolling:'enabled',
    scrollPositionRestoration: "top",
    
    
   
  })), provideAnimations(), provideHttpClient(),provideClientHydration(),googleAnalyticsProviders,
  
  // {
  //   // Custom provider to lazy load Google Analytics
  //   provide: 'googleAnalytics',
  //   useFactory: () => {
  //     return new Promise<void>((resolve) => {
  //       const checkFCPAndLCP = () => {
  //         if (window.performance) {
      
            
  //           const fcp = performance.getEntriesByName('first-contentful-paint')[0];
  //           const lcp = performance.getEntriesByName('largest-contentful-paint')[0];
  //           console.log(fcp,lcp)
  //           if (fcp && lcp) {
  //             // If both FCP and LCP are available, load Google Analytics
  //             provideGoogleAnalytics('G-06BPS7FXZY');
  //             resolve();
  //           } else {
  //             // Retry after a short delay if FCP/LCP are not available yet
  //             setTimeout(checkFCPAndLCP, 100);
  //           }
  //         }
  //       };
  //       checkFCPAndLCP();
  //     });
  //   }
  // },
  
  importProvidersFrom([BrowserAnimationsModule])]
};
