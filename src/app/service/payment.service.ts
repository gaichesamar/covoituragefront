import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ad } from '../model/ad';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:9090/commands/ad/create';
  constructor(private http: HttpClient) { }

  createAd(ad: Ad) {
  return this.http.post(`${this.baseUrl}`, ad);
  }
  
}
