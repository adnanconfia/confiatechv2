import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowsToCircle, faCodeMerge, faHandHoldingHand, faIcons, faLaptopCode, faQrcode, faSprayCan, faStopwatch, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FontAwesomeModule, ConfiaButtonComponent,CommonModule,NgOptimizedImage],
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
  arrowToCircle=faArrowsToCircle
  handHoldingHand=faHandHoldingHand;
  stopWatch=faStopwatch;
}
