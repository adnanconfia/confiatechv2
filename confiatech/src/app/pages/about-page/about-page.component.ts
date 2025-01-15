import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { PhasesComponent } from "../../components/phases/phases.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutComponent, PhasesComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  constructor(  private meta: Meta,
      private title: Title){
        this.title.setTitle("Services - ConfiaTech");
      this.meta.updateTag({ name: 'description', content: `
        Learn about ConfiaTech Pvt Ltd’s mission, team, and commitment to delivering top-notch technology solutions for businesses worldwide.` });
      }
}
