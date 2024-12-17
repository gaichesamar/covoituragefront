import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Mail} from '../model/mail';
import { Observable } from 'rxjs';
import { CreateReclamationRequest } from './CreateReclamationRequest';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private baseUrl = 'http://localhost:8085/commands/account';
  private Url= 'http://localhost:8085/key';
  private url ='http://localhost:8088/commands/notifications';
  private apiUrl='http://localhost:8082/commands/Reclamation/create';
  constructor(private http: HttpClient) { }

  createReclamation(request: CreateReclamationRequest): Observable<string> {
    return this.http.post<string>(this.apiUrl, request);
  }


}
