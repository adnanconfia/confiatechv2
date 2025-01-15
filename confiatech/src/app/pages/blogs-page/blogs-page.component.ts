import { Component } from '@angular/core';
import { BlogsComponent } from '../../components/blogs/blogs.component';

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [BlogsComponent],
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.scss'
})
export class BlogsPageComponent {

}
