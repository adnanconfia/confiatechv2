import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import {  Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-be-development',
  standalone: true,
  imports: [NgOptimizedImage,ConfiaButtonComponent,ServiceSliderComponent],
  templateUrl: './be-development.component.html',
  styleUrl: './be-development.component.scss'
})
export class BeDevelopmentComponent {

  constructor(private title:Title,private meta:Meta){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("Backend Development");
    this.meta.updateTag({ name: 'description', content: `
     Get robust and secure back-end solutions with ConfiaTech Pvt Ltd. We specialize in Django, ASP.NET, and scalable architectures for your projects.` });


  }
}
