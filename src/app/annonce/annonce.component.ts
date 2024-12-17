import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Annoce} from "../model/annoce";
import {Reservation} from "../model/reservation";
import {AnnonceService} from '../service/annonce.service';
import {Conducteur} from '../model/conducteur';
import { ResrvationService } from '../service/resrvation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  idannonce;
  listannonce;
  listconducteurfidel;
  idpassager;
  lieu_departSearch = "";
  nbrplacedispo: number;
  submitted = false;
  lieu_arriveSearch = "";
  date_departSearch;
  annonce;
  CreateAdRequestDTO;
  reservationForm!: FormGroup;
  ann = new Annoce();
  resrvation = new Reservation;
  nbplaces!: any;
  // idchauf;
  chauffeur = new Conducteur();
  private baseUrl = 'http://localhost:8210/query/ads';
  cars: any[] | undefined


  constructor(private annoncesevice: AnnonceService , private reesrvationservice:ResrvationService, private formBuilder :FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      nbplaces: ['', Validators.compose([Validators.required, Validators.max(4)])]
    });
    this.all();
   
}
onReserverClick() {
  this.router.navigate(['/register']);
}

get f() {
  return this.reservationForm.controls;
}
getoneannonce(id)
{
  this.annoncesevice.getdBYId(id).subscribe(rs => {
    console.log(rs);
    this.annonce = rs;
    this.idannonce = this.annonce.id;
    this.nbrplacedispo = this.annonce.nbrPlace;
    console.log(this.idannonce);
  });
}
all() { 
  this.annoncesevice.getAllAds().subscribe(data => {
    this.cars = data;

  });
  }


passerreservation() {
  console.log(" this.reservationForm.value[\"nbplaces\"] ", this.reservationForm.value);
  const data = {
    nbplaces: this.reservationForm.value["nbplaces"]
  };
  this.submitted = true;
 
  // stop here if form is invalid
  if (this.reservationForm.invalid) {
    return;
  }
   
  this.reesrvationservice.createReservation(data).subscribe(res => {
    console.log("passer resrvation ", res);
    this.annonce = res;
    this.all();
  });

}

}


