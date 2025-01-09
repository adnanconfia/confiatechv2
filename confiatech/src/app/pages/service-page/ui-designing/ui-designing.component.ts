import { Component } from '@angular/core';
import { ConfiaButtonComponent } from '../../../utils/confia-button/confia-button.component';
import { ServiceSliderComponent } from '../../../components/service-slider/service-slider.component';
import { NgOptimizedImage } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-designing',
  standalone: true,
  imports: [ConfiaButtonComponent,ServiceSliderComponent,NgOptimizedImage],
  templateUrl: './ui-designing.component.html',
  styleUrl: './ui-designing.component.scss'
})
export class UiDesigningComponent {
  constructor(private title:Title){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle("UI/UX Designing");

  }
}
