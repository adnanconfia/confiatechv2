import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ui-designing',
  standalone: true,
  imports: [ConfiaButtonComponent,ServiceSliderComponent,NgOptimizedImage],
  templateUrl: './ui-designing.component.html',
  styleUrl: './ui-designing.component.scss'
})
export class UiDesigningComponent {

}
