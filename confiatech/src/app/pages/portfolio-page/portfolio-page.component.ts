import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../utils/confia-button/confia-button.component';
import { ImageModule } from 'primeng/image';
import { Title } from '@angular/platform-browser';
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
  constructor(private title:Title,private portfolioService:PortfolioServiceService){

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
