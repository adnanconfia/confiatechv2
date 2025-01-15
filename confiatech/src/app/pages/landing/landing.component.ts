import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ServicesComponent } from "../../components/services/services.component";
import { ClientCompComponent } from "../../components/client-comp/client-comp.component";
import { PortfolioCompComponent } from "../../components/portfolio-comp/portfolio-comp.component";
import { PhasesComponent } from "../../components/phases/phases.component";
import { AboutComponent } from "../../components/about/about.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { BlogsComponent } from "../../components/blogs/blogs.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, ClientCompComponent, PortfolioCompComponent, PhasesComponent, AboutComponent, ContactComponent, BlogsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
  export class LandingComponent {

    constructor(  private meta: Meta,
      private title: Title){
        this.title.setTitle("ConfiaTech - Dream Digitizers");
      this.meta.updateTag({ name: 'description', content: 'ConfiaTech Pvt Ltd offers innovative tech solutions in web development, mobile apps, and enterprise software to drive your success' });
      }
}
