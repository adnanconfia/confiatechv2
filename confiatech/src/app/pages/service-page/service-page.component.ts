import { Component } from '@angular/core';
import { ServicesComponent } from "../../components/services/services.component";

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.scss'
})
export class ServicePageComponent {

}
