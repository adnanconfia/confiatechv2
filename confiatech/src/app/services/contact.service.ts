import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Iemail } from '../utils/types/Iemail.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  sendMail(data:Iemail){
    return this.http.post(`${this.apiUrl}send-email/`, data);
  }
}
