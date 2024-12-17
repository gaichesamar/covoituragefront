import {Marquevoiture} from './marquevoiture';

export class Modelvoiture {

  private _id:string;
  private _nom:string;
private marqueVoiture=new Marquevoiture()
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

}
