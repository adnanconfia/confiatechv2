import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { ServiceSliderComponent } from "../../../components/service-slider/service-slider.component";
import { Meta, Title } from '@angular/platform-browser';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [NgOptimizedImage, ConfiaButtonComponent, ServiceSliderComponent],
  templateUrl: './fe-development.component.html',
  styleUrl: './fe-development.component.scss'
})
export class FEDevelopmentComponent {
  constructor(private title:Title,private meta:Meta,private analytics:AnalyticsService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("Front-End Development");

    this.meta.updateTag({ name: 'description', content: `
    ConfiaTech Pvt Ltd provides expert front-end development services using modern frameworks like React and Angular for fast and responsive websites.` });
    this.meta.updateTag({ name: 'keywords', content: 'HTML, CSS , SCSS, Responsive Web Design, JavaScript , TypeScript , Angular , react , WordPress , Api integration , PSD, Tailwind , Bootstrap , Material UI , Prime Ng , Prime Faces, Development' });
   
    this.analytics.trackEvent("FrontEnd development page","FrontEnd development page loaded into view","FrontEnd development page");

  }
  
}
