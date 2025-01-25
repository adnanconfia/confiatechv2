import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLaptopCode, faTerminal, faQrcode, faIcons, faSprayCan, faCodeMerge, faServer, faArrowsToCircle, faHandHoldingHand, faStopwatch, faComputer } from '@fortawesome/free-solid-svg-icons';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
@Component({
  selector: 'app-service-slider',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule,CommonModule],
  templateUrl: './service-slider.component.html',
  styleUrl: './service-slider.component.scss'
})
export class ServiceSliderComponent {
  @Input() serviceName!:string;
  laptopCodeIcon=faLaptopCode;
  backEndIcon= faTerminal;
  mobileIcon=faQrcode;
  uiIcon=faIcons;
  graphicIcon=faSprayCan;
  desktopIcon=faCodeMerge;
  serverIcon=faServer;
  arrowToCircle=faArrowsToCircle
  handHoldingHand=faHandHoldingHand;
  stopWatch=faStopwatch;
  computer=faComputer;
  isBrowser:boolean;
  slider:KeenSliderInstance | undefined;
  currentSlide: number = 0
  dotHelper: Array<Number> = []
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  constructor( @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
   }
  ngAfterViewInit(): void {
    if(this.isBrowser && this.sliderRef)
      {
        var _origin: any = "center"
        var self=this;
this.slider = new KeenSlider(this.sliderRef.nativeElement,  {
  loop: true,
  mode:"snap",
  drag:false,
  renderMode:"precision",
  
  breakpoints: {
    "(min-width: 570px)": {
      slides: { perView: 1, origin: _origin, spacing: 10 },
    //  range: {
      //    min: _range,
      //    max: _range * -1
      //    },
    },
    "(min-width: 768px)": {
      slides: { perView: 2, origin: _origin, spacing: 10 },
      //  range: {
      //    min: _range,
      //    max: maxRange
      //  },

    },
    "(min-width: 992px)": {
      slides: { perView: 2, origin: _origin, spacing: 10 },
      //  range: {
      //    min: _range,
      //    max: maxRange
      //  },

    },
    "(min-width: 1200px)": {
      slides: { perView: 3, origin: _origin, spacing: 10 },
      //  range: {
      //    min: _range,
      //    max: maxRange
      //  },

    }
  },initial: this.currentSlide,
  slideChanged: (s) => {
    this.currentSlide = s.track.details.rel
  },
});
this.dotHelper = [
  ...Array(this.slider.track.details.slides.length).keys(),
]
  }}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.slider?.destroy();
  }
}
