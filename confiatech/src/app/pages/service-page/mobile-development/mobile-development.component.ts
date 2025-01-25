import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { NgOptimizedImage } from '@angular/common';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { Meta, Title } from '@angular/platform-browser';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-mobile-development',
  standalone: true,
  imports: [ConfiaButtonComponent,NgOptimizedImage,ServiceSliderComponent],
  templateUrl: './mobile-development.component.html',
  styleUrl: './mobile-development.component.scss'
})
export class MobileDevelopmentComponent {
  constructor(private title:Title,private meta:Meta,private analytics:AnalyticsService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("Mobile App Development");
    this.meta.updateTag({ name: 'description', content: `
      ConfiaTech Pvt Ltd delivers cutting-edge mobile app development services for iOS and Android, ensuring seamless performance and user satisfaction.` });
      this.meta.updateTag({ name: 'keywords', content: 'IOS Development, Swift UI , Android Development , React Native , Java , Kotlin , Dart , Object C , Flutter , Native Apps, Firebase ,PlayStore Deployment , App Store Deployment .' });
   
      this.analytics.trackEvent("Mobile App development page","Mobile App development page loaded into view","Mobile App development page");
  
 
  }
}
