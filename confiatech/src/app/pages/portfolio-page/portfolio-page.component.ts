import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../utils/confia-button/confia-button.component';
import { ImageModule } from 'primeng/image';
import { Meta, Title } from '@angular/platform-browser';
import { portfolio, PortfolioServiceService } from '../../services/portfolio-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [ConfiaButtonComponent,ImageModule,CommonModule ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {
  portfolio:portfolio[]=[]
  constructor(private title:Title,private portfolioService:PortfolioServiceService,private meta:Meta){
    this.title.setTitle("Portfolio - ConfiaTech");
    this.meta.updateTag({ name: 'description', content: `
       ConfiaTech Pvt Ltd’s portfolio of web, mobile, and cloud projects. Discover how we deliver tailored solutions for businesses.` });
 
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadPortfolio();
  }
  loadPortfolio(){
    this.portfolio = this.portfolioService.getPortfolio();

  }
}
