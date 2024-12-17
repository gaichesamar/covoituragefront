import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Voitur} from '../model/voitur';
import {Observable} from 'rxjs';
import { Car } from './Car';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  private CommURL = 'http://localhost:9098/commands/car';
  private QueryURL ='http://localhost:9098/query/cars'
  constructor(private httpClient:HttpClient) {}

  addCar(car :Car){
    return this.httpClient.post<Car>(`${this.CommURL}/Add`,car);
  }
  getCarsList(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.QueryURL}/GetAllCars`);
  }

  getCarById(id: String): Observable<Car>{
    return this.httpClient.get<Car>(`${this.QueryURL}/GetCarById/${id}`);
  }

  updateCar(id?: String , car?: any): Observable<any>{
    return this.httpClient.put(`${this.CommURL}/update/${id}`, car);
  }

  deleteCar(id: String): Observable<any>{
    return this.httpClient.delete(`${this.CommURL}/delete/${id}`);
  }
  getAdsByUserId(userId: string): Observable<any> {
    const url = `${this.QueryURL}/user/${userId}`;
    return this.httpClient.get<any>(url);
  }
}