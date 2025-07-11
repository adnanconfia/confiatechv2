import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowsToCircle,
  faCodeMerge,
  faComputer,
  faHandHoldingHand,
  faIcons,
  faLaptopCode,
  faQrcode,
  faRobot,
  faServer,
  faSprayCan,
  faStopwatch,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { ConfiaButtonComponent } from '../../utils/confia-button/confia-button.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  style,
  trigger,
  state,
  transition,
  animate,
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const style1 = style({
  opacity: 1,
  transform: 'translateX(0)',
});

const style2 = style({
  opacity: 0,
  transform: 'translateX(-100%)',
});
const style3 = style({
  opacity: 1,
  transform: 'translateX(0)',
});

const style4 = style({
  opacity: 0,
  transform: 'translateX(100%)',
});
const style5 = style({
  opacity: 1,
  transform: 'translateY(0)',
});

const style6 = style({
  opacity: 0,
  transform: 'translateY(-100%)',
});

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ConfiaButtonComponent,
    CommonModule,
    NgOptimizedImage,
    RouterModule,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    trigger('service', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in')),
    ]),
    trigger('service2', [
      state('show', style3),
      state('hide', style4),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in')),
    ]),
    trigger('service3', [
      state('show', style5),
      state('hide', style6),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in')),
    ]),
    trigger('title', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in')),
    ]),
  ],
})
export class ServicesComponent {
  @Input() isServicePage: boolean = false;
  laptopCodeIcon = faLaptopCode;
  backEndIcon = faTerminal;
  mobileIcon = faQrcode;
  uiIcon = faIcons;
  graphicIcon = faSprayCan;
  desktopIcon = faCodeMerge;
  serverIcon = faServer;
  state = 'show';
  titleState = 'show';
  arrowToCircle = faArrowsToCircle;
  handHoldingHand = faHandHoldingHand;
  stopWatch = faStopwatch;
  computer = faComputer;
  aiIcon = faRobot;
  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {

  //   const componentPosition = this.el.nativeElement.offsetTop
  //   const scrollPosition = window.pageYOffset
  //   if (scrollPosition >= componentPosition-500 ) {
  //     this.state = 'show';
  //     this.titleState = 'show';
  //   } else {
  //     this.state = 'hide'
  //     this.titleState = 'hide';
  //   }

  // }
  constructor(public el: ElementRef, private cdr: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      if (this.isServicePage) {
        this.state = 'show';
      }
    }, 2000);

    this.cdr.detectChanges();
  }

  feStr = ` Front-end development focuses on creating the visible parts of
                websites and applications, ensuring they are attractive,
                interactive, and easy to navigate. This involves building
                layouts, adding animations, and optimizing performance for users
                on various devices, including desktops, tablets, and mobile
                phones. Front-end developers use modern tools and technologies
                like HTML, CSS, JavaScript, and frameworks such as React or
                Angular to design interfaces that enhance user engagement. By
                combining creativity with technical expertise, they ensure every
                element works perfectly. Businesses looking to improve their
                online presence, whether by creating a new website or
                redesigning an existing one, benefit greatly from skilled
                front-end developers. For instance, if you're searching for
                "website design company near me" or need "offshore web
                development," front-end specialists can deliver high-quality
                solutions tailored to your needs. Their work bridges the gap
                between design and functionality, ensuring your users have an
                excellent experience every time they interact with your site or
                app`;
}
