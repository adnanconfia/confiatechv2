import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loaderService {
    public loading$ = new BehaviorSubject<boolean>(false);
    getLoading(): Observable<boolean> {
        return this.loading$;
      }
}