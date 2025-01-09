import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { NgOptimizedImage } from '@angular/common';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile-development',
  standalone: true,
  imports: [ConfiaButtonComponent,NgOptimizedImage,ServiceSliderComponent],
  templateUrl: './mobile-development.component.html',
  styleUrl: './mobile-development.component.scss'
})
export class MobileDevelopmentComponent {
  constructor(private title:Title){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("Mobile App Development");

  }
}
