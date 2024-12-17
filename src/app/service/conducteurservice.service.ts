import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Conducteur} from "../model/conducteur";
import {AuthentificationService} from "./authentification.service";

@Injectable({
  providedIn: "root",
})
export class ConducteurserviceService {

  public basurl = "http://localhost:9001";

  constructor(private http: HttpClient) {
  }

  public getall() {

    return this.http.get(this.basurl + "/chauffeur/all");

  }

  public getchaufeurfidel() {

    return this.http.get(this.basurl + "/chauffeur/allchauffAnnonce");

  }

  public delete(id) {

    return this.http.delete(this.basurl + "/chauffeur/delete/" + id);

  }

  public addconducteur(c) {

    return this.http.post(this.basurl + "/chauffeur/add", c);

  }

  public addavis(idc, avis) {

    return this.http.post(this.basurl + "/avis/addavis/" + idc, avis);

  }

  public getavis(idc) {

    return this.http.get(this.basurl + "/chauffeur/lisetavis/" + idc);

  }
  public getTotalavis(idc) {

    return this.http.get(this.basurl + "/avis/avisconducteur/" + idc);

  }

  public modif(id, c) {

    return this.http.put(this.basurl + "/chauffeur/edit/" + id, c);
  }

  public getone(id) {

    return this.http.get(this.basurl + "/chauffeur/one/" + id);

  }

  public getvoiturebyconducteur(idC): Observable<Conducteur> {

    return this.http.get<Conducteur>(this.basurl + "/voitur/voiturcond/" + idC);

  }

  public addvoiture(idC, idM, data) {

    return this.http.post(this.basurl + "/voitur/add/" + idC + "/" + idM, data);

  }

  public getmodelbymarque(idmodel) {

    return this.http.get(this.basurl + "/model/modelbymarque/" + idmodel);

  }

  public getallMarque() {

    return this.http.get(this.basurl + "/marque/all");

  }

  public getonMarque(idM) {

    return this.http.get(this.basurl + "/marque/one/" + idM);

  }



}
