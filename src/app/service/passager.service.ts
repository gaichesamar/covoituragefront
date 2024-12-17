import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  basurl = "http://localhost:9001";

  constructor(private http: HttpClient, private authService: AuthentificationService) {
  }

  getall() {

    return this.http.get(this.basurl + '/passeger/all');

  }

  modifpassager(id, c) {
    return this.http.put(this.basurl + '/passeger/update/' + id, c);
  }

  delete(id) {

    return this.http.delete(this.basurl + '/passeger/delete/' + id);

  }

  addpassager(c) {

    return this.http.post(this.basurl + '/passeger/add', c);

  }

  getone(id) {

    return this.http.get(this.basurl + '/passager/one/' + id);

  }
}
