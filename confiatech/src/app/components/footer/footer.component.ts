import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  location=faLocationDot;
  phone = faPhone;
  mail = faEnvelope;
  facebook = faFacebookF;
  instagram = faInstagram;
  linkedin = faLinkedinIn;
  x = faXTwitter;
  date = new Date();
}
