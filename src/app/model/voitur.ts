import {Conducteur} from './conducteur';
import {Marquevoiture} from './marquevoiture';

export class Voitur {

  id:string;
model:string;
  plaque_imatriculation:boolean;
  nbrplacesdisponible:string;
  date_imatriculation:Date;
  type:string;
  couleur:string;
  chauffeur:Conducteur;
maquevoiture:Marquevoiture

}
