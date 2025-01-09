import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loaderService {
    public loading$ = new BehaviorSubject<boolean>(true);
    getLoading(): Observable<boolean> {
        return this.loading$;
      }
}