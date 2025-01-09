import { Component } from '@angular/core';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { NgOptimizedImage } from '@angular/common';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-devops',
  standalone: true,
  imports: [ServiceSliderComponent,NgOptimizedImage,ConfiaButtonComponent],
  templateUrl: './devops.component.html',
  styleUrl: './devops.component.scss'
})
export class DevopsComponent {
  constructor(private title:Title){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("DevOps Solutions");

  }
}
