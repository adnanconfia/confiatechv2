import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { ConfiaButtonComponent } from '../../utils/confia-button/confia-button.component';
import { portfolio, PortfolioServiceService } from '../../services/portfolio-service.service';

@Component({
  selector: 'app-portfolio-comp',
  standalone: true,
  imports: [CommonModule,ConfiaButtonComponent,NgOptimizedImage],
  templateUrl: './portfolio-comp.component.html',
  styleUrl: './portfolio-comp.component.scss'
})
export class PortfolioCompComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  @ViewChild("sliderRef2") sliderRef2!: ElementRef<HTMLElement>
  @Input() Id:number=0;
  @Input() isHome:boolean=true;
  @Input() privatePage:boolean=false;
  slider: KeenSliderInstance | undefined ;
  slider2: KeenSliderInstance | undefined ;
  isBrowser:boolean;
  portfolio:portfolio[]=[];
  portfolioReverse:portfolio[]=[];
  currentSlide: number = 1
  currentSlide2: number = 1
  isPaused:boolean=false;
  constructor( @Inject(PLATFORM_ID) platformId: Object,private portfolioService:PortfolioServiceService,private cdr:ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(platformId);
   }
  ngOnInit(): void {
    this.loadPortfolio()
     
   }
   ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

      if(this.Id>0){
        this.portfolio = this.portfolio.filter((x)=>x.id!=this.Id);
        this.cdr.detectChanges();
        this.slider2?.update();
        this.cdr.detectChanges();
        this.loadSlider();
  
      }
   
   }
  loadPortfolio(){
 
    // if(this.Id>0){

    //   this.portfolio = this.portfolioService.getPortfolio().filter((x)=>x.id!=this.Id);
    //   this.loadSlider()
    // }else{

      this.portfolio = this.portfolioService.getPortfolio();
      this.portfolioReverse = this.portfolio.reverse(); 
    // }




  }
  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

    this.loadSlider()
   
  }


loadSlider(){

  if(this.isBrowser )
    {
              var _origin: any = "center"
              var self=this;
              if(this.isHome )
     {
      this.slider = new KeenSlider(this.sliderRef.nativeElement,  {
        loop: true,
        mode:"free-snap",
        drag:true,
        breakpoints: {
          "(min-width: 570px)": {
            slides: { perView: 1, origin: _origin, spacing: 0 },
            //  range: {
            //    min: _range,
            //    max: _range * -1
            //    },
          },
          "(min-width: 768px)": {
            slides: { perView: 2, origin: _origin, spacing: 0 },
            //  range: {
            //    min: _range,
            //    max: maxRange
            //  },

          },
          "(min-width: 992px)": {
            slides: { perView: 2, origin: _origin, spacing: 0 },
            //  range: {
            //    min: _range,
            //    max: maxRange
            //  },

          },
          "(min-width: 1200px)": {
            slides: { perView: 3, origin: _origin, spacing: 0 },
            //  range: {
            //    min: _range,
            //    max: maxRange
            //  },

          }
        },
        //  range:{
        //    min: _range,
        //    max: maxRange
        //  }

        slides: {
          perView: 1,
          origin: _origin,
          spacing: 0,

        },
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
    }, [
    (slider) => {
        let timeout: string | number | NodeJS.Timeout | undefined
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ])  
     }

    this.slider2 = new KeenSlider(this.sliderRef2.nativeElement,  {
      loop: true,
      mode:"free-snap",
      drag:true,
      rtl:this.isHome?true:false,
      breakpoints: {
        "(min-width: 570px)": {
          slides: { perView: 1, origin: _origin, spacing: 0 },
          //  range: {
          //    min: _range,
          //    max: _range * -1
          //    },
        },
        "(min-width: 768px)": {
          slides: { perView: 2, origin: _origin, spacing: 0 },
          //  range: {
          //    min: _range,
          //    max: maxRange
          //  },

        },
        "(min-width: 992px)": {
          slides: { perView: 2, origin: _origin, spacing: 0 },
          //  range: {
          //    min: _range,
          //    max: maxRange
          //  },

        },
        "(min-width: 1200px)": {
          slides: { perView: 3, origin: _origin, spacing: 0 },
          //  range: {
          //    min: _range,
          //    max: maxRange
          //  },

        }
      },
      //  range:{
      //    min: _range,
      //    max: maxRange
      //  }

      slides: {
        perView: 1,
        origin: _origin,
        spacing: 0,

      },
      initial: this.currentSlide2,
      slideChanged: (s) => {
        this.currentSlide2 = s.track.details.rel
      },
  }, [
    (slider2) => {
      let timeout: string | number | NodeJS.Timeout | undefined
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider2.next()
        }, 5000)
      }
      slider2.on("created", () => {
        slider2.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider2.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider2.on("dragStarted", clearNextTimeout)
      slider2.on("animationEnded", nextTimeout)
      slider2.on("updated", nextTimeout)
    },
  ])
   
  }
}
  ngOnDestroy() {
    if (this.slider && this.isBrowser){
       this.slider?.destroy()
      }
    if (this.slider2 && this.isBrowser){
       this.slider2?.destroy()
      }
  }
}
