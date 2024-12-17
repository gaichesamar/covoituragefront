import {Component, NgZone, OnInit} from '@angular/core';
import {Conducteur} from '../../model/conducteur';
import {AnnonceService} from '../../service/annonce.service';
import {AuthentificationService, ConducteurserviceService} from '../../service';
import {ResrvationService} from '../../service/resrvation.service';
import {Annoce} from '../../model/annoce';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Reservation} from '../../model/reservation';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  cars: any[] | undefined

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
  reservationForm!: FormGroup;
  ann = new Annoce();
  resrvation = new Reservation;
  nbplaces!: any;
  router: any;

  constructor(private zone: NgZone, private formBuilder: FormBuilder, private reesrvationservice: ResrvationService, private annoncesevice: AnnonceService, private conducteurservce: ConducteurserviceService, private authservice: AuthentificationService) {
    
  }

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


