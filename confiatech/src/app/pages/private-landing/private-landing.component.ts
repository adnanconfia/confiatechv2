import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ConfiaButtonComponent } from '../../utils/confia-button/confia-button.component';
import {
  CommonModule,
  isPlatformBrowser,
  NgOptimizedImage,
} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLaptopCode,
  faTerminal,
  faQrcode,
  faIcons,
  faSprayCan,
  faCodeMerge,
  faServer,
  faArrowsToCircle,
  faHandHoldingHand,
  faStopwatch,
  faComputer,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { PortfolioCompComponent } from '../../components/portfolio-comp/portfolio-comp.component';
import { AnalyticsService } from '../../services/analytics.service';
import { ContactComponent } from '../../components/contact/contact.component';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FAQComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'app-private-landing',
  standalone: true,
  imports: [
    ConfiaButtonComponent,
    FontAwesomeModule,
    CommonModule,
    NgOptimizedImage,
    PortfolioCompComponent,
    ContactComponent,
    TestimonialsComponent,
    FAQComponent,
  ],
  templateUrl: './private-landing.component.html',
  styleUrl: './private-landing.component.scss',
})
export class PrivateLandingComponent {
  isBrowser: boolean;
  laptopCodeIcon = faLaptopCode;
  backEndIcon = faTerminal;
  mobileIcon = faQrcode;
  uiIcon = faIcons;
  graphicIcon = faSprayCan;
  desktopIcon = faCodeMerge;
  serverIcon = faServer;
  arrowToCircle = faArrowsToCircle;
  handHoldingHand = faHandHoldingHand;
  stopWatch = faStopwatch;
  computer = faComputer;
  star = faStar;
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider: KeenSliderInstance | undefined;

  currentSlide: number = 1;
  isPaused: boolean = false;
  constructor(
    private meta: Meta,
    private cdr: ChangeDetectorRef,
    private title: Title,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) platformId: Object,
    private analytics: AnalyticsService
  ) {
    this.setMetaTags();
    this.isBrowser = isPlatformBrowser(platformId);
    this.title.setTitle('ConfiaTech - Dream Digitzers');
  }
  // Call this function in `ngOnInit()`
  ngOnInit() {
    this.loadCSS('https://assets.calendly.com/assets/external/widget.css');
    this.loadScript('https://assets.calendly.com/assets/external/widget.js');
    if (this.isBrowser) {
      // (window as any).dataLayer =     (window as any).dataLayer || [];
      // (window as any).dataLayer.push({
      //   'event':'devops',
      //   "transaction_id":123566,
      //   "value":23500,
      //   "currency":'$',
      //   "item":`[{"name":"item1","price":123}]`,
      //   "payment_method":"stripe 2",
      //   "Discount":1234
      // })
    }
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    setTimeout(() => {
      if (this.isBrowser) {
        document.getElementById('cookieConsent')?.classList.add('d-block');
      }
    }, 3000);
    if (this.isBrowser) {
      var _origin: any = 'auto';
      var self = this;
      this.slider = new KeenSlider(
        this.sliderRef.nativeElement,
        {
          loop: true,
          mode: 'snap',
          drag: false,
          breakpoints: {
            '(min-width: 570px)': {
              slides: { perView: 1, origin: _origin, spacing: 5 },
              //  range: {
              //    min: _range,
              //    max: _range * -1
              //    },
            },
            '(min-width: 768px)': {
              slides: { perView: 2, origin: _origin, spacing: 5 },
              //  range: {
              //    min: _range,
              //    max: maxRange
              //  },
            },
            '(min-width: 992px)': {
              slides: { perView: 3, origin: _origin, spacing: 15 },
              //  range: {
              //    min: _range,
              //    max: maxRange
              //  },
            },
            '(min-width: 1200px)': {
              slides: { perView: 4, origin: _origin, spacing: 15 },
              //  range: {
              //    min: _range,
              //    max: maxRange
              //  },
            },
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
            this.currentSlide = s.track.details.rel;
          },
        },
        [
          (slider) => {
            let timeout: string | number | NodeJS.Timeout | undefined;
            let mouseOver = false;
            function clearNextTimeout() {
              clearTimeout(timeout);
            }
            function nextTimeout() {
              clearTimeout(timeout);
              if (mouseOver) return;
              timeout = setTimeout(() => {
                slider.next();
              }, 5000);
            }
            slider.on('created', () => {
              slider.container.addEventListener('mouseover', () => {
                mouseOver = true;
                clearNextTimeout();
              });
              slider.container.addEventListener('mouseout', () => {
                mouseOver = false;
                nextTimeout();
              });
              nextTimeout();
            });
            slider.on('dragStarted', clearNextTimeout);
            slider.on('animationEnded', nextTimeout);
            slider.on('updated', nextTimeout);
          },
        ]
      );
      this.cdr.detectChanges();
    }
  }
  setMetaTags() {
    const url = this.route.snapshot.url.join('/');

    // Check for the specific URL where you want to add no-index
    if (url === 'custom-web-apps') {
      this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    }
  }
  loadCalendly() {
    // this.analytics.eventWithParam("initiateCheckout",
    //   {

    //     "currency":'$',
    //   }

    // )
    if (this.isBrowser) {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'initiateCheckout',
        currency: 'PKR',
      });
    }
    //   if(this.isBrowser)
    // {
    //   (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/confiatechisb/30min?background_color=ffffff&text_color=000000&primary_color=18b6c6'});return false;
    // }
    // return false;
  }
  loadCSS(url: string) {
    if (this.isBrowser) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
    }
  }
  loadScript(url: string) {
    if (this.isBrowser) {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }

  accept() {
    document.getElementById('cookieConsent')?.classList.remove('d-block');
  }
}
