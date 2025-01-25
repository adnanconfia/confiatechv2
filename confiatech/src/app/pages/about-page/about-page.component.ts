import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { PhasesComponent } from "../../components/phases/phases.component";
import { Meta, Title } from '@angular/platform-browser';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutComponent, PhasesComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  constructor(  private meta: Meta,
      private title: Title,private analytics:AnalyticsService){
        this.title.setTitle("About - ConfiaTech");
      this.meta.updateTag({ name: 'description', content: `
        Learn about ConfiaTech Pvt Ltd’s mission, team, and commitment to delivering top-notch technology solutions for businesses worldwide.` });
        this.meta.updateTag({ name: 'keywords', content: 'Website Development,  Designing , Wireframing, UI/UX Design, Copywriting, Testing, Deployment , Documentation , IT Company , Tech Company , Software House' });
   
      }
      ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.analytics.trackEvent("About page","About page loaded into view","About page");
      }
}
