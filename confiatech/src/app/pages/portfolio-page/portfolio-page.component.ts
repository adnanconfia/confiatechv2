import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../utils/confia-button/confia-button.component';
import { ImageModule } from 'primeng/image';
import { Meta, Title } from '@angular/platform-browser';
import { portfolio, PortfolioServiceService } from '../../services/portfolio-service.service';
import { CommonModule } from '@angular/common';
import { loaderService } from '../../utils/helpers/loader';
import { AnalyticsService } from '../../services/analytics.service';
@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [ConfiaButtonComponent,ImageModule,CommonModule ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {
  portfolio:portfolio[]=[]
  constructor(private title:Title,private portfolioService:PortfolioServiceService,private meta:Meta,private loader:loaderService,private analytics :AnalyticsService){
    this.title.setTitle("Portfolio - ConfiaTech");
    this.meta.updateTag({ name: 'description', content: `
       ConfiaTech Pvt Ltd’s portfolio of web, mobile, and cloud projects. Discover how we deliver tailored solutions for businesses.` });
       this.meta.updateTag({ name: 'keywords', content: 'Wordpress Customization, Angular , React , Django , Asp.net , Wordpress, Child theme development, PWA progress web apps, Mobile Apps, Web Apps,' });
    
 
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.analytics.trackEvent("Portfolio page","Portfolio page loaded into view","Portfolio page");
    this.loadPortfolio();
  }
  portfolioClick(){
   
    this.loader.loading$.next(true);
  }
  loadPortfolio(){
    this.portfolio =  this.portfolioService.getPortfolio();
  

  }
}
