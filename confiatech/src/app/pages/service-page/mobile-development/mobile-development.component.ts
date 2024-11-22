import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { NgOptimizedImage } from '@angular/common';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';

@Component({
  selector: 'app-mobile-development',
  standalone: true,
  imports: [ConfiaButtonComponent,NgOptimizedImage,ServiceSliderComponent],
  templateUrl: './mobile-development.component.html',
  styleUrl: './mobile-development.component.scss'
})
export class MobileDevelopmentComponent {

}
