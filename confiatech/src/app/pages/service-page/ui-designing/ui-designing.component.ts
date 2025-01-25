import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-ui-designing',
  standalone: true,
  imports: [ConfiaButtonComponent,ServiceSliderComponent,NgOptimizedImage],
  templateUrl: './ui-designing.component.html',
  styleUrl: './ui-designing.component.scss'
})
export class UiDesigningComponent {
  constructor(private title:Title,private meta:Meta,private analytics:AnalyticsService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("UI/UX Designing");
    this.meta.updateTag({ name: 'description', content: `
      Transform your digital presence with ConfiaTech Pvt Ltd’s UI/UX design services. We create intuitive, user-friendly designs for apps and websites.` });
      this.meta.updateTag({ name: 'keywords', content: 'Figma, Adobe XD , Wireframing , Prototyping , Work Flows ,  Designing , Trending UI, Optimistic Design, Software House , Software Development' });
   
      this.analytics.trackEvent("UI/UX Designing page","UI/UX Designing page loaded into view","UI/UX Designing page");
  
  }
}
