import { PortfolioServiceService } from './../../../services/portfolio-service.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { portfolio } from '../../../services/portfolio-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';

@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule,ConfiaButtonComponent],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.scss'
})
export class PortfolioDetailsComponent {
  portfolio:portfolio | undefined ;
  constructor(private title:Title,private portfolioService:PortfolioServiceService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.loadPortfolio(id);
  }
  loadPortfolio(id:string | null){
    this.portfolio = this.portfolioService.getPortfolio().find(x=>x.id.toString()===id);
    
    this.title.setTitle(this.portfolio?.title?this.portfolio?.title:'Portfolio Details')
  }
}
