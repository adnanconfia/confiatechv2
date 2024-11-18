import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { PhasesComponent } from "../../components/phases/phases.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutComponent, PhasesComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
