import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConfiaButtonComponent } from './../../../utils/confia-button/confia-button.component';
import { Component } from '@angular/core';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [ConfiaButtonComponent,NgOptimizedImage,CommonModule,ServiceSliderComponent],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {
  constructor(private title:Title,private meta:Meta){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("Graphic Designing");
    this.meta.updateTag({ name: 'description', content: `
      ConfiaTech Pvt Ltd offers high-quality graphic design services. From branding to custom visuals, we craft designs that leave a lasting impression.` });
   
  }
}
