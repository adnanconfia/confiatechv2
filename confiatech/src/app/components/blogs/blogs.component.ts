import { Component, Input } from '@angular/core';
import { ConfiaButtonComponent } from "../../utils/confia-button/confia-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [ConfiaButtonComponent,CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
@Input()  isBlogPage:boolean=false
}
