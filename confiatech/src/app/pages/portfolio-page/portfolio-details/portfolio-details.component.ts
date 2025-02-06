import { PortfolioServiceService } from './../../../services/portfolio-service.service';
import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { portfolio } from '../../../services/portfolio-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { ImageModule } from 'primeng/image';
import { PortfolioCompComponent } from '../../../components/portfolio-comp/portfolio-comp.component';
import { loaderService } from '../../../utils/helpers/loader';


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
  isBrowser:boolean=false;
  constructor(private title:Title,private portfolioService:PortfolioServiceService,private router:Router,private loader:loaderService,
     @Inject(PLATFORM_ID) platformId: Object,
     private cdr:ChangeDetectorRef,
    private activatedRoute:ActivatedRoute,private meta:Meta,private sanitizer: DomSanitizer){
      this.isBrowser = isPlatformBrowser(platformId);
    }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.router.events.subscribe(() => {
      // This will be called every time the route changes
      var id = this.activatedRoute.snapshot.paramMap.get('id');
 
      this.cdr.detectChanges()
    this.loadPortfolio(id);
    });

  }
  loadPortfolio(id:string | null){
    
     const res =  this.portfolioService.getPortfolio().find((x:any)=>x.id.toString()===id)
     this.loader.loading$.next(false);
   
      if(res ===undefined){
        if(this.isBrowser){
          window.location.href = "/not-found";
        }
  
      }else{
        this.portfolio =res ;
 
         this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.portfolio?.description || "");
         this.meta.updateTag({ name: 'description', content: this.portfolio?.metaDescription || "" });
         this.title.setTitle(this.portfolio?.title?this.portfolio?.title:'Portfolio Details')
      }
  
    

  }
}
