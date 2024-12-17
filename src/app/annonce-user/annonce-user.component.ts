import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Annoce} from "../model/annoce";
import {Reservation} from "../model/reservation";
import {AnnonceService} from '../service/annonce.service';
import {Conducteur} from '../model/conducteur';
import { ResrvationService } from '../service/resrvation.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CreateAdRequestDTO } from '../service/CreateAdRequestDTO';

@Component({
  selector: 'app-annonce-user',
  templateUrl: './annonce-user.component.html',
  styleUrls: ['./annonce-user.component.css']
})
export class AnnonceUserComponent {
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
  cars: any[] | undefined;
listeAnnonce: any[] | undefined;

annonceForm!: FormGroup;
constructor(private annoncesevice: AnnonceService , private reesrvationservice:ResrvationService, private formBuilder :FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      nbplaces: ['', Validators.compose([Validators.required, Validators.max(4)])]
    });
    this.all();

        this.annonceForm = this.formBuilder.group({
      description: ['', Validators.required],
      dateDep: ['', Validators.required],
      dateArr: ['', Validators.required],
      heureDep: ['', Validators.required],
      heureArr: ['', Validators.required],
      prixPlace: ['', Validators.required],
      lieuDep: ['', Validators.required],
      nbrPlace: ['', Validators.required],
      lieuArr: ['', Validators.required],
      cigarette: [false],
      aller_retour: [false],
      animaux_de_companie: [false]
    });
  
   
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
  this.annoncesevice.getAdsByUserId(localStorage.getItem("iduser")).subscribe(data => {
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

delete(id: any) {
  Swal.fire(
     'Êtes-vous sûr de supprimer cette annonce?',
   ' Vous ne pourrez pas revenir en arrière ! ',
     'warning'
  ).then((result: any ) => {
    if (result.value) {

      this.annoncesevice.deleteAd(id).subscribe((res: any) => {

        this.all();
       
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      });
    }
  });
}

rec(id){
  this.idannonce=id;
  console.log(id)
}
onSubmit() {
  this.submitted = true;

  if (this.annonceForm.invalid) {
    return;
  }

  const request = {
    description: this.annonceForm.value.description,
    dateDep: this.annonceForm.value.dateDep,
    dateArr: this.annonceForm.value.dateArr,
    heureDep: this.annonceForm.value.heureDep,
    heureArr:this.annonceForm.value.heureArr,
    prixPlace: this.annonceForm.value.prixPlace,
    lieuDep: this.annonceForm.value.lieuDep,
    nbrPlace: this.annonceForm.value.nbrPlace,
    lieuArr: this.annonceForm.value.lieuArr,
    cigarette: this.annonceForm.value.cigarette,
    aller_retour: this.annonceForm.value.aller_retour,
    animaux_de_companie: this.annonceForm.value.animaux_de_companie,
    account: localStorage.getItem("iduser")
  };

  this.annoncesevice.updateAd(this.idannonce,request).subscribe(
    response => {
      console.log('Annonce créée avec succès');
    
    },
    error => {
      console.error('Erreur lors de la création de l\'annonce', error);
    }
  );
  this.all();
}
}



