import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [NgOptimizedImage,ConfiaButtonComponent],
  templateUrl: './fe-development.component.html',
  styleUrl: './fe-development.component.scss'
})
export class FEDevelopmentComponent {

}
