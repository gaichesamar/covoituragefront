import {AfterViewInit, Component, ElementRef, HostListener, NgZone, OnInit, ViewChild} from '@angular/core';
import {AnnonceService} from '../../service/annonce.service';
import {AuthentificationService} from '../../service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {CreateAdRequestDTO} from 'src/app/service/CreateAdRequestDTO';
import { Router } from '@angular/router';

@Component({
  selector: "app-ajoutannonce",
  templateUrl: './ajoutannonce.component.html',
  styleUrls: ["./ajoutannonce.component.css"]

})
export class AjoutannonceComponent implements OnInit {
  annonceForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private adService: AnnonceService, private router: Router) {
  }

  ngOnInit(): void {
    this.annonceForm = this.formBuilder.group({
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

  get f() {
    return this.annonceForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.annonceForm.invalid) {
      return;
    }

    const request: CreateAdRequestDTO = {
      dateDep: this.f.dateDep.value,
      dateArr: this.f.dateArr.value,
      heureDep: this.f.heureDep.value,
      heureArr: this.f.heureArr.value,
      prixPlace: this.f.prixPlace.value,
      lieuDep: this.f.lieuDep.value,
      nbrPlace: this.f.nbrPlace.value,
      lieuArr: this.f.lieuArr.value,
      cigarette: this.f.cigarette.value,
      aller_retour: this.f.aller_retour.value,
      animaux_de_companie: this.f.animaux_de_companie.value,
      description: localStorage.getItem("iduser")
    
    };
    console.log(request);

    this.adService.createAd(request).subscribe(
      response => {
        // Gérer la réponse de la création d'annonce réussie
        console.log('Annonce créée avec succès');
        this.router.navigate(['/']);
      
      },
      error => {
        // Gérer les erreurs de création d'annonce
        console.error('Erreur lors de la création de l\'annonce', error);
        this.router.navigate(['/']);

      }
    );
    this.router.navigate(['/']);

  }
}
