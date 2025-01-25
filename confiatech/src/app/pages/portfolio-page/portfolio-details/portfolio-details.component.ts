import { PortfolioServiceService } from './../../../services/portfolio-service.service';
import { Component } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { portfolio } from '../../../services/portfolio-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { ImageModule } from 'primeng/image';
import { PortfolioCompComponent } from '../../../components/portfolio-comp/portfolio-comp.component';


@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule,ConfiaButtonComponent,ImageModule,PortfolioCompComponent],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.scss'
})
export class PortfolioDetailsComponent {
  portfolio:portfolio | undefined ;
  safeHtml: any;
  constructor(private title:Title,private portfolioService:PortfolioServiceService,private router:Router,
    private activatedRoute:ActivatedRoute,private meta:Meta,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.loadPortfolio(id);
  }
  loadPortfolio(id:string | null){
    
     const res =  this.portfolioService.getPortfolio().find((x:any)=>x.id.toString()===id)
      this.portfolio =res ;
     setTimeout(() => {
      if(!res){
        this.router.navigateByUrl("/not-found")
      }
     }, 1500);
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.portfolio?.description || "");
      this.meta.updateTag({ name: 'description', content: this.portfolio?.metaDescription || "" });
      this.title.setTitle(this.portfolio?.title?this.portfolio?.title:'Portfolio Details')
    

  }
}
