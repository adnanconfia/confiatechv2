import { Component } from '@angular/core';
import { ServicesComponent } from "../../components/services/services.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.scss'
})
export class ServicePageComponent {
  constructor(  private meta: Meta,
      private title: Title){
        this.title.setTitle("Services - ConfiaTech");
      this.meta.updateTag({ name: 'description', content: `Explore ConfiaTech’s web, mobile, and cloud services. From development to enterprise solutions, we help businesses thrive` });
      }
}
