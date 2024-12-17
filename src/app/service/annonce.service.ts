import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Annoce} from "../model/annoce";
import {AuthentificationService} from "./authentification.service";
import { CreateAdRequestDTO } from "./CreateAdRequestDTO";

@Injectable({
  providedIn: "root",
})
export class AnnonceService {
  private baseUrl = 'http://localhost:8223'; // replace with your API base URL
  constructor(private http: HttpClient) { }

  createAd(adData: CreateAdRequestDTO): Observable<any> {
    const url = `${this.baseUrl}/commands/ad/create`;
    return this.http.post(url, adData);
  }

  updateAd(adId: string, adData: any): Observable<any> {
    const url = `${this.baseUrl}/commands/ad/update/${adId}`;
    return this.http.put(url, adData);
  }

  deleteAd(adId: string): Observable<any> {
    const url = `${this.baseUrl}/commands/ad/delete/${adId}`;
    return this.http.delete(url);
  }
  getAllAds(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'/query/ads/GetAllAds')
  }
  getdBYId(adId: string): Observable<any>{
    const url = `${this.baseUrl}/query/ads/GetAdById/${adId}`;
     return this.http.get(url);
  } 
  getAdsByUserId(userId: string): Observable<any> {
    const url = `${this.baseUrl}/query/ads//user/${userId}`;
    return this.http.get(url);
  }
    
}