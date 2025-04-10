import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarAlt } from '@fortawesome/free-regular-svg-icons';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { ConfiaButtonComponent } from '../../utils/confia-button/confia-button.component';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ConfiaButtonComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  isBrowser: boolean;
  @Input() isHome: boolean = true;
  star = faStar;
  starHollow = faStarAlt;
  testimonials = [
    {
      name: 'Ahsan R.',
      stars: 5,
      review:
        'I am honoured to share this testimonial for the web development services I received. The developer I worked with shown exceptional talents and a strong commitment to providing high-quality work on time. It was a pleasure working with ConfiaTech, and I highly endorse their services',
      designation: 'Product Owner',
    },
    {
      name: 'Dasiuke M.',
      stars: 5,
      review:
        'ConfiaTech have highly skilled and professional developers. They consistently delivered high-quality code and demonstrated exceptional problem-solving skills. Their proactive approach and clear communication made the collaboration a seamless experience.',
      designation: 'CEO',
    },
    {
      name: 'Michiel d.',
      stars: 5,
      review:
        'I hired two developers for a couple of months, They were kind, very responsive, sometimes worked in the evening and in the weekends and delivered an excellent job, Thank you ConfiaTech!',
      designation: 'Sr. Software Developer',
    },
    {
      name: 'Danish M.',
      stars: 5,
      review:
        'Working with ConfiaTech on an Angular and Django web application was a fantastic experience. They were professional, communicative, and highly skilled. The end result was a brilliant web app that exceeded my expectations in every way. I highly recommend ConfiaTech for anyone looking to build a high-quality web application',
      designation: 'Product Owner-UK Based',
    },
    {
      name: 'Matthijs P.',
      stars: 5,
      review:
        'I hired one Developer from ConfiaTech. He worked on both back-end and front-end of a new web based app for me. Currently the MVP is almost done and I hope I can hire him again for the v2 of the app.',
      designation: 'Senior PO',
    },
  ];
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider: KeenSliderInstance | undefined;

  currentSlide: number = 1;
  isPaused: boolean = false;
  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    setTimeout(() => {
      if (this.isBrowser) {
        document.getElementById('cookieConsent')?.classList.add('tw-block');
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
}
