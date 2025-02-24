import { inject, Injectable } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly gtag = inject(GoogleAnalyticsService);
  trackEvent(eventName: string, eventDetails: string, eventCategory: string) {
    this.gtag.event(eventName,
       eventCategory,     eventDetails
    )
  
  
  }
  eventWithParam(eventName:string,params:any){
    this.gtag.gtag('event',eventName,params)
  }
}

