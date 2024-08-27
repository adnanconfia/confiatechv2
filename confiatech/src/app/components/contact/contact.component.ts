import { Component } from '@angular/core';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ConfiaButtonComponent,FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 location=faLocationDot;
 phone = faPhone;
 mail = faEnvelope
}
