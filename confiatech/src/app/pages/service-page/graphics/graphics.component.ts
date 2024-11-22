import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConfiaButtonComponent } from './../../../utils/confia-button/confia-button.component';
import { Component } from '@angular/core';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [ConfiaButtonComponent,NgOptimizedImage,CommonModule,ServiceSliderComponent],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {

}
