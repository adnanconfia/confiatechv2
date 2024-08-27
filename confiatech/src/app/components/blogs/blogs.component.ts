import { Component } from '@angular/core';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [ConfiaButtonComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

}
