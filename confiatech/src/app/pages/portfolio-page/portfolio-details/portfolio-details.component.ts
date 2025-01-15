import { PortfolioServiceService } from './../../../services/portfolio-service.service';
import { Component } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
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
  safeHtml: any;
  constructor(private title:Title,private portfolioService:PortfolioServiceService,private activatedRoute:ActivatedRoute,private meta:Meta,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.loadPortfolio(id);
  }
  loadPortfolio(id:string | null){
    this.portfolio = this.portfolioService.getPortfolio().find(x=>x.id.toString()===id);
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.portfolio?.description || "");
    this.meta.updateTag({ name: 'description', content: this.portfolio?.metaDescription || "" });
    this.title.setTitle(this.portfolio?.title?this.portfolio?.title:'Portfolio Details')
  }
}
