import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Marquevoiture} from "../../model/marquevoiture";
import {Voitur} from "../../model/voitur";
import { User } from "src/app/model/user";
import {AuthentificationService, ConducteurserviceService} from "../../service";
import {ImageService} from "../../service/image.service";
import {PassagerService} from "../../service/passager.service";
import {VoitureService} from "../../service/voiture.service";

@Component({
  selector: "app-conducteur",
  templateUrl: "./conducteur.component.html",
  styleUrls: ["./conducteur.component.css"],
})
export class ConducteurComponent implements OnInit {
  user: User | undefined ;
  router: any;
  username: string = '';
  form: any;

  constructor(private apiService: AuthentificationService,private conducteurserviceService:ConducteurserviceService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getUsername();

  }
  public addavis() {
    console.log(this.form.value);
    this.conducteurserviceService.addavis(this.id, this.form.value).subscribe((res) => {
      console.log(res);
    });
  } 
  id(id: any, value: any) {
    throw new Error("Method not implemented.");
  }

  getCurrentUser() {
    this.apiService.getCurrentUser().subscribe((response: User) => {
      console.log('Response from getCurrentUser():', response);
      this.user = response;
    });
  }
 
  getUsername() {
    this.apiService.getUsername().subscribe((response) => {
      this.username = response['username'];
    });
  }

  deleteAccount() {
    this.apiService.deleteUser().subscribe(() => {
      alert('Account deleted successfully.');
    });
  }
  logout() {
    this.apiService.logout().subscribe(() =>{
      this.router.navigate(['/login']);
    });
  }
 
  myVariable: boolean;

  public show() {

    this.myVariable = !this.myVariable;

  }

}

