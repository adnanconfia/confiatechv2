import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConfiaButtonComponent } from './../../../utils/confia-button/confia-button.component';
import { Component } from '@angular/core';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [ConfiaButtonComponent,NgOptimizedImage,CommonModule,ServiceSliderComponent],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {
  constructor(private title:Title){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("Graphic Designing");

  }
}
