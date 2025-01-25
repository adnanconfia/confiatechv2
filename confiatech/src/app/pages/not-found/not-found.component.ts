import { Component } from '@angular/core';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ConfiaButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
