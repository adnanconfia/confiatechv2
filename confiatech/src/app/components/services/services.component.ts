import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowsToCircle, faCodeMerge, faHandHoldingHand, faIcons, faLaptopCode, faQrcode, faServer, faSprayCan, faStopwatch, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FontAwesomeModule, ConfiaButtonComponent,CommonModule,NgOptimizedImage,RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @Input() isServicePage:boolean=false;
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
                app`
}
