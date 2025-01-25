import { Component } from '@angular/core';
import { ServicesComponent } from "../../components/services/services.component";
import { Meta, Title } from '@angular/platform-browser';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.scss'
})
export class ServicePageComponent {
  constructor(  private meta: Meta,
      private title: Title,private analytics:AnalyticsService){
        this.title.setTitle("Services - ConfiaTech");
      this.meta.updateTag({ name: 'description', content: `Explore ConfiaTech’s web, mobile, and cloud services. From development to enterprise solutions, we help businesses thrive` });
      this.meta.updateTag({ name: 'keywords', content: 'Front End Development, Backend Development , Mobile App Development , User Interface and Experience Designs, High Quality Graphic Designs , Devops Solutiuon , Customize Law Firm Solution, Best IT Company ,Best Tech Company , Best Software House' });
     
    }
      ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.analytics.trackEvent("Service page","Service page loaded into view","Service page");
      }
}
