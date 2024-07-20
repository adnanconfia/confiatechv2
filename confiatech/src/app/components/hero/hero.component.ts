import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, ConfiaButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
