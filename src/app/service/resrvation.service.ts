import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, catchError, map} from "rxjs";
import {Reservation} from "../model/reservation";
import {AuthentificationService} from "./authentification.service";

@Injectable({
  providedIn: "root",
})
export class ResrvationService {
  public apiUrl = "http://localhost:8083";

  constructor(private http: HttpClient, private authService: AuthentificationService) {
  }
  createReservation(reservation: any): Observable<any> {
    const url = `${this.apiUrl}/create`;
    return this.http.post(url, reservation).pipe(
      map(response => response),
      catchError(error => {
        throw new Error(error.message);
      })
    );
  }

  deleteReservation(reservationId: string): Observable<any> {
    const url = `${this.apiUrl}/delete/${reservationId}`;
    return this.http.delete(url).pipe(
      map(response => response),
      catchError(error => {
        throw new Error(error.message);
      })
    );
  }

}