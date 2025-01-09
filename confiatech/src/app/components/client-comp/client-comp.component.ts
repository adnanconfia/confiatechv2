import { CommonModule, isPlatformBrowser, NgOptimizedImage } from "@angular/common";
import { ChangeDetectorRef, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from "@angular/core"
import KeenSlider, { KeenSliderInstance } from "keen-slider"

const animation = { duration: 25000, easing: (t:any) => t }
@Component({
  selector: 'app-client-comp',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule],
  templateUrl: './client-comp.component.html',
  styleUrl: './client-comp.component.scss'
})

export class ClientCompComponent implements OnInit{
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  slider: KeenSliderInstance | undefined ;
  isBrowser:boolean;

  currentSlide: number = 1
  isPaused:boolean=false;
  constructor( @Inject(PLATFORM_ID) platformId: Object,private cdr:ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(platformId);
   }
  ngOnInit(): void {
    if(this.isBrowser && this.sliderRef)
      {
      
  }}
  ngAfterViewInit() {
    if(this.isBrowser)
    {
              var _origin: any = "auto"
              var self=this;
      this.slider = new KeenSlider(this.sliderRef.nativeElement,  {
        loop: true,
        mode:"snap",
        drag:false,
        breakpoints: {
          "(min-width: 570px)": {
            slides: { perView: 1, origin: _origin, spacing: 5 },
            //  range: {
            //    min: _range,
            //    max: _range * -1
            //    },
          },
          "(min-width: 768px)": {
            slides: { perView: 2, origin: _origin, spacing: 5 },
            //  range: {
            //    min: _range,
            //    max: maxRange
            //  },

          },
          "(min-width: 992px)": {
            slides: { perView: 3, origin: _origin, spacing: 5 },
            //  range: {
            //    min: _range,
            //    max: maxRange
            //  },

          },
          "(min-width: 1200px)": {
            slides: { perView: 4, origin: _origin, spacing: 5 },
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
    this.cdr.detectChanges();
  }

  }

  ngOnDestroy() {
    if (this.slider && this.isBrowser){
       this.slider?.destroy()
      }
  }
}
