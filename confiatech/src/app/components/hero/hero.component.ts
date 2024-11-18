import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
import KeenSlider, { KeenSliderInstance } from "keen-slider"
const animation = { duration: 8000, easing: (t:any) => t }

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, ConfiaButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  @ViewChild("sliderRef2") sliderRef2!: ElementRef<HTMLElement>
  slider: KeenSliderInstance | undefined ;
  slider2: KeenSliderInstance | undefined ;
  isBrowser:boolean;
  
  constructor( @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

   ngAfterViewInit() {
    if(this.isBrowser)
    {
      
              var _origin: any = "center"
              var self=this;
      this.slider = new KeenSlider(this.sliderRef.nativeElement,  {
        loop: true,
        mode:"free",
        drag:false,
        
        breakpoints: {
          "(min-width: 570px)": {
            slides: { perView: 2, origin: _origin, spacing: 5 },
            //  range: {
            //    min: _range,
            //    max: _range * -1
            //    },
          },
          "(min-width: 768px)": {
            slides: { perView: 3, origin: _origin, spacing: 5 },
            //  range: {
            //    min: _range,
            //    max: maxRange
            //  },

          },
          "(min-width: 992px)": {
            slides: { perView: 4, origin: _origin, spacing: 5 },
            //  range: {
            //    min: _range,
            //    max: maxRange
            //  },

          },
          "(min-width: 1200px)": {
            slides: { perView: 5, origin: _origin, spacing: 5 },
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
          spacing: 5,

        },
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    },)
      this.slider2 = new KeenSlider(this.sliderRef2.nativeElement,  {
        loop: true,
        mode:"free",
        drag:false,
        rtl:true,
        breakpoints: {
          "(min-width: 570px)": {
            slides: { perView: 2, origin: _origin, spacing: 5 },
            //  range: {
            //    min: _range,
            //    max: _range * -1
            //    },
          },
          "(min-width: 768px)": {
            slides: { perView: 3, origin: _origin, spacing: 5 },
            //  range: {
            //    min: _range,
            //    max: maxRange
            //  },

          },
          "(min-width: 992px)": {
            slides: { perView: 4, origin: _origin, spacing: 5 },
            //  range: {
            //    min: _range,
            //    max: maxRange
            //  },

          },
          "(min-width: 1200px)": {
            slides: { perView: 5, origin: _origin, spacing: 5 },
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
          spacing: 5,

        },
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    },)
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
