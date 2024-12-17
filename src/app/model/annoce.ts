import {Conducteur} from './conducteur';

export class Annoce {
  id:string;
   date_depart:string;

lieu_depart:string;
  lieu_arrive:string;

 nbrplacesdisponible:Number;
   prix:string;
 heurDepart:string;

 aller_retour:boolean;
 description:string;
  regulier:boolean;
  chauffeur:Conducteur;

  idconducteur:string;
}


