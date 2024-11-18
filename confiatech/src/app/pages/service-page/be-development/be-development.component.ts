import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';

@Component({
  selector: 'app-be-development',
  standalone: true,
  imports: [NgOptimizedImage,ConfiaButtonComponent],
  templateUrl: './be-development.component.html',
  styleUrl: './be-development.component.scss'
})
export class BeDevelopmentComponent {

}
