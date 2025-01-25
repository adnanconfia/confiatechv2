import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
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
  title = 'ConfiaTech';
  constructor(private loader:loaderService,private router:Router){
    

this.router.events.subscribe(value => {
        if(value instanceof NavigationEnd)    {
          setTimeout(() => {
            this.loader.loading$.next(false)
          }, 2000);}
        if(value instanceof NavigationStart)    {
          this.loader.loading$.next(true)}
        });

  }
  ngAfterViewInit() {

}
}
