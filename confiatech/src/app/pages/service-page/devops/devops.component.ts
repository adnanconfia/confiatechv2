import { Component } from '@angular/core';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { NgOptimizedImage } from '@angular/common';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';

@Component({
  selector: 'app-devops',
  standalone: true,
  imports: [ServiceSliderComponent,NgOptimizedImage,ConfiaButtonComponent],
  templateUrl: './devops.component.html',
  styleUrl: './devops.component.scss'
})
export class DevopsComponent {

}
