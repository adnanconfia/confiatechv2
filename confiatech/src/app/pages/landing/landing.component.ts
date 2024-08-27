import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ServicesComponent } from "../../components/services/services.component";
import { ClientCompComponent } from "../../components/client-comp/client-comp.component";
import { PortfolioCompComponent } from "../../components/portfolio-comp/portfolio-comp.component";
import { PhasesComponent } from "../../components/phases/phases.component";
import { AboutComponent } from "../../components/about/about.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BlogsComponent } from "../../components/blogs/blogs.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, ClientCompComponent, PortfolioCompComponent, PhasesComponent, AboutComponent, ContactComponent, FooterComponent, BlogsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
  export class LandingComponent {

}
