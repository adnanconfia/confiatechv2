import { Component } from '@angular/core';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { NgOptimizedImage } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-customized-software',
  standalone: true,
  imports: [NgOptimizedImage, ConfiaButtonComponent, ServiceSliderComponent],
  templateUrl: './customized-software.component.html',
  styleUrl: './customized-software.component.scss'
})
export class CustomizedSoftwareComponent {
  constructor(private title:Title,private meta:Meta,private analytics:AnalyticsService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("Customized software development");

    this.meta.updateTag({ name: 'description', content: `ConfiaTech offers customized software solutions for law firms, from design and 
development to deployment and support. Tailored to meet your needs.` });
this.meta.updateTag({ name: 'keywords', content: 'Requirement Gathering, QA , Development , Custom Web Development , Web Development , Tailored Solution , Bespoke Solution , LAw firm Custom Software, LAw firm Software, Law software, Complete Software' });
   
this.analytics.trackEvent("Customized software development page","Customized software development page loaded into view","Customized software development page");


  }

}
