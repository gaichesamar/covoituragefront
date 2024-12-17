import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../model/user";
import {AccessTokenResponse} from "./AccessTokenResponse";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {

  private baseUrl = 'http://localhost:8084/commands/account';
  private Url = 'http://localhost:8084/key';
  private url = 'http://localhost:8088/commands/notifications';
  private apiUrl = 'http://localhost:8082/commands/Reclamation/create';

  constructor(private http: HttpClient) {
  }

  // create Account - Create
  create(account: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, account);
  }

  login(user: any): Observable<AccessTokenResponse> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<AccessTokenResponse>(`${this.baseUrl}/login`, JSON.stringify(user), {headers})
      .pipe(map(response => {
        localStorage.setItem('access_token', response.access_token);
        return response;
      }));
  }

  getUsername(): Observable<any> {
    const headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.get(`${this.baseUrl}/getUsername`, {headers});
  }

  updateUser(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
    return this.http.put(`${this.baseUrl}/update`, JSON.stringify(user), {headers});
  }

  updatebase(user: any,id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
    return this.http.put(`${this.baseUrl}/update/`+id, JSON.stringify(user), {headers});
  }
  getUserById(id): Observable<any> {
    return this.http.get<any>(`${this.Url}/accounts/`+id);
  }

  deleteUser(): Observable<any> {
    const headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    return this.http.delete(`${this.baseUrl}/remove`, {headers});
  }

  getCurrentUser(): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<User>(`${this.Url}/users/me`, {headers});
  }

  logout() {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  getNotifications(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }

}
