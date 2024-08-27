import { Component } from '@angular/core';
import { loaderService } from '../../utils/helpers/loader';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  loader$:Observable<boolean>;
  constructor(private loader:loaderService){
    this.loader$ = this.loader.getLoading();

  }
}
