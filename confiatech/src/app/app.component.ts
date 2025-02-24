import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { LoaderComponent } from './components/loader/loader.component';
import { loaderService } from './utils/helpers/loader';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoaderComponent,FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ConfiaTech';
  url!:string;
  constructor(private loader:loaderService,private router:Router,private route: ActivatedRoute){

    this.router.events.subscribe(() => {
      this.url = this.router.url.replaceAll("/",'');
      this.url=this.url?this.url:'/';
    

    });
// this.router.events.subscribe(value => {
//         if(value instanceof NavigationEnd)    {
//           setTimeout(() => {
//             this.loader.loading$.next(false)
//           }, 2000);}
//         if(value instanceof NavigationStart)    {
//           this.loader.loading$.next(true)}
//         });

  }
  ngAfterViewInit() {
 
 
}
}
