import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';

@Component({
  selector: 'app-be-development',
  standalone: true,
  imports: [NgOptimizedImage,ConfiaButtonComponent,ServiceSliderComponent],
  templateUrl: './be-development.component.html',
  styleUrl: './be-development.component.scss'
})
export class BeDevelopmentComponent {

}
