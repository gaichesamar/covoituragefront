import {Pipe, PipeTransform} from '@angular/core';
import {Conducteur} from '../model/conducteur';

export interface Annonce {
  //lieu_depart: string;
  //lieu_arrive: string;
  //date_depart: string;

  //acseptationauto: boolean;
  //nbrplacesdisponible: string;
  //prix: string;
  //heurDepart: string;

 // aller_retour: boolean;
  //description: string;
  //regulier: boolean;
  //chauffeur: Conducteur;
  //description: string;
  dateDep: string;
  dateArr: string;
  heureDep: string;
  heureArr: string;
  prixPlace: number;
  lieuDep: string;
  nbrPlace: number;
  lieuArr: string;
  cigarette: boolean;
  aller_retour: boolean;
  animaux_de_companie: boolean;
  account: string;

}

@Pipe({
  name: 'annonce'
})
export class AnnoncePipe implements PipeTransform {

  transform(
    annonce: Annonce[],
    lieu_departSearch?: string,
    lieu_arriveSearch?: string,
    date_departSearch?: string,
  ): Annonce[] {

    if (!annonce) {
      return [];
    }
    if (!lieu_departSearch && !lieu_arriveSearch) {
      return annonce;
    } else {
      lieu_departSearch = lieu_departSearch.toLocaleLowerCase();
      lieu_arriveSearch = lieu_arriveSearch.toLocaleLowerCase();
      annonce = [...annonce.filter(annonce => annonce.lieuDep.toLocaleLowerCase().includes(lieu_departSearch))];

      annonce = [...annonce.filter(annonce => annonce.lieuArr.toLocaleLowerCase().includes(lieu_arriveSearch))];
    }
    if (!date_departSearch) {
      return annonce;
    }

    annonce = [...annonce.filter(annonce => annonce.dateDep.includes(date_departSearch))];

    return annonce;
  }

}
