import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { LoaderComponent } from './components/loader/loader.component';
import { loaderService } from './utils/helpers/loader';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'confiatech';
  constructor(private loader:loaderService){}
  ngAfterViewInit() {
  setTimeout(() => {
    this.loader.loading$.next(false)
  }, 2000);
}
}
