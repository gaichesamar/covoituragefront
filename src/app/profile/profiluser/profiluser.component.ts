import {Component, Input, OnInit} from '@angular/core';
import {Marquevoiture} from '../../model/marquevoiture';
import {Voitur} from '../../model/voitur';
import {ActivatedRoute} from '@angular/router';
import {VoitureService} from '../../service/voiture.service';
import {ImageService} from '../../service/image.service';
import {AuthentificationService, ConducteurserviceService} from '../../service';
import {PassagerService} from '../../service/passager.service';
import {ResrvationService} from '../../service/resrvation.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updateLocale } from 'ngx-bootstrap';
import { Car } from 'src/app/service/Car';

@Component({
  selector: 'app-profiluser',
  templateUrl: './profiluser.component.html',
  styleUrls: ['./profiluser.component.css']
})
export class ProfiluserComponent implements OnInit {
  [x: string]: any;
  passager;
  conducteur;
  idconducteur;zz
  photo;
  marque = new Marquevoiture();
  filesToUpload: Array<File>;
  iduser;
  listMarques;
  listmodel;
  added = false;
  myVariable = true;
  test = false;
  voiture = new Voitur();
  idmarque;
  marque1;
  voituree = new Voitur();
  listreservation;
  note;

  role!: any;
  totalavis!: any;
  listType = [
    {name: '4×4'},
    {name: 'Minivan'},
    {name: 'Familiale'},
    {name: 'Coupé'},
    {name: 'Berline'}

  ];
  data: any;
voitures:any;
vehicule= new Car(); //instance
  

  constructor(private reservationservice: ResrvationService, private activaterout: ActivatedRoute, private voiturservice: VoitureService, private imsr: ImageService, private conducteurserviceService: ConducteurserviceService, private passagerService: PassagerService, private authenService: AuthentificationService
) {
  this.form = new FormGroup({
      marque: new FormControl('', [Validators.required]),
      immatriculation: new FormControl('', [Validators.required]),
      couleur: new FormControl('', [Validators.required]),
      nbrPlace: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),

    

  })
}

  ngOnInit() {
    // this.noteattrubier(this.iduser);
    this.getuserconnecte();
    this.getAllcar();
   
    
  }

 

  getTotalavis() {
    return this.conducteurserviceService.getTotalavis(this.iduser).subscribe((res: any) => {

      this.totalavis = res.length;
    });
  }

  recuper(id, nom) {

    this.idmarque = id;
    this.marque.nom = nom;
    console.log(nom);
  }

  getuserconnecte() {
    this.authenService.getCurrentUser().subscribe(res => {
      console.log(res);
      this.conducteur = res;



    });
    
  }
 

  calculage(date) {
    let todayD = new Date();
    let dd = new Date(date);
    let d1 = dd.getFullYear();
    let d2 = todayD.getFullYear();

    return d2 - d1;

  }

  modifierconducteur() {
    const data = {
      username: this.conducteur.username,
      firstname: this.conducteur.firstname,
      lastname: this.conducteur.lastname,
      email: this.conducteur.email,
      telephone:this.conducteur.telephone,
      adress: this.conducteur.adress,
      dateOfBirth:this.conducteur.dateOfBirth,
     password: this.conducteur.password,
      photo: this.photo
    };

    console.log(data);

    this.authenService.updateUser(data).subscribe(res => {
      console.log(res);
this.authenService.updateUser(data).subscribe(updateLocale =>{
  console.log(updateLocale);
      if (this.filesToUpload != undefined) {

        this.imsr.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
          console.log(rest);
        });
      }


    });
  });

  }

 
 

  all() {
    this.conducteurserviceService.getallMarque().subscribe(res => {
      console.log(res);
      this.listMarques = res;
    });

  }

  getmodelbymarque() {

    console.log(this.idmarque);

    this.conducteurserviceService.getmodelbymarque(this.idmarque).subscribe(data => {
      console.log(data);
      this.listmodel = data;

    });

  }


  getconducteurbyid(id) {
    this.conducteurserviceService.getone(id).subscribe(res => {
      console.log(res);
      this.conducteur = res;

    });
  }

  reservationparpassager(iduser) {
    this.reservationservice.createReservation(iduser).subscribe(res1 => {
      console.log(res1);
      this.listreservation = res1;

    });
  }

  getpassager(id) {
    this.passagerService.getone(id).subscribe(res => {
      console.log(res);
      this.passager = res;

    });

  }

  deleteresrvation(idreservation) {
    this.reservationservice.deleteReservation(idreservation).subscribe(res => {
      console.log(res);
     
    });

  }

  Submit(){


    const data = {
      marque: this.form.value.marque,
      immatriculation:this.form.value.immatriculation,
      couleur: this.form.value.couleur,
      nbrPlace:this.form.value.nbrPlace,
      type: this.form.value.type,
      modele:localStorage.getItem("iduser")

     
    };

    console.log(data);
    this.voiturservice.addCar(data).subscribe(data1 =>{
      console.log(data1);})
      this. getAllcar();
}
  
    
  
    getAllcar()  {
      this.voiturservice.getAdsByUserId(localStorage.getItem("iduser")).subscribe(data =>{
        this.voitures = data;
        console.log(data);})
    
}
delete(id: any) {
  Swal.fire(
     'Êtes-vous sûr de supprimer cette vehicule?',
   ' Vous ne pourrez pas revenir en arrière ! ',
     'warning'
  ).then((result: any ) => {
    if (result.value) {

      this.voiturservice.deleteCar(id).subscribe((res: any) => {

        this.getAllcar();
       
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      });
    }
  });
}

rec(id,marque,immatriculation,nbrPlace,couleur,type,modele){
  this.vehicule.id=id;
  this.vehicule.marque=marque;
this.vehicule.immatriculation=immatriculation;
this.vehicule.nbrPlace=nbrPlace;
this.vehicule.couleur=couleur;
this.vehicule.type=type;
this.vehicule.modele=modele;
  console.log(this.vehicule);
}


 
modifiervoiture() {
  const data = {
    marque: this.vehicule.marque,
    modele: this.vehicule.modele,
    immatriculation: this.vehicule.immatriculation,
    couleur: this.vehicule.couleur,
    nbrPlace:this.vehicule.nbrPlace,
    type: this.vehicule.type,
   
  };

  console.log(data);

  this.voiturservice.updateCar(this.vehicule.id,data).subscribe(res => {
    console.log(res);
this.getAllcar();

}

);}}