import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { routes } from '../../utils/helpers/routes';
import { Iroute } from '../../utils/types/Iroutes.interface';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,RouterModule,NgOptimizedImage],
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
  urls:Iroute[]=routes;
}
