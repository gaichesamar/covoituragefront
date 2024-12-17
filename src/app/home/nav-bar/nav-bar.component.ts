import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService, ConducteurserviceService} from '../../service';
import {ResrvationService} from '../../service/resrvation.service';
import {Reservation} from '../../model/reservation';
import Swal from "sweetalert2";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  iduser;
  listidres;
  message: string;
  user = new User;
  loginForm: FormGroup;
  submitted = false;
  ison = false;
  isoff = false;

  userconnecte;

  listreservationatendvalid;
  listreservationpassager;
  listreservationatend;
  listreseatetster;

  constructor(private reservationservice: ResrvationService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              public authenService: AuthentificationService,
              private conducteurservice: ConducteurserviceService
  ) {

    if (localStorage.getItem('connecte') == "true") {
      this.ison = true;
    }

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.getprofile();

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onlogin() {

    this.submitted = true;
    const data = {
      username: this.loginForm.value["username"],

      password: this.loginForm.value["password"],
    };

    this.authenService.login(data).subscribe(res => {

        this.ison = true;
        localStorage.setItem('connecte', 'true');
        console.log(res);

        // const jwt = res.headers.get('Authorization')
        // this.authenService.saveToken(jwt);

        this.router.navigate(['/']);

        this.refresh();

      }
      , error2 => {

        Swal.fire(
          'OPPs',
          'Vérifier vos coordonnées:)',
          'error'
        );
      }
    );

    if (this.loginForm.invalid) {
      return;
    }

  }

  refresh(): void {
    window.location.reload();
  }

  deconecter() {

    localStorage.clear();
    sessionStorage.clear();
    this.isoff = false;
    this.authenService.logout().subscribe(res => {
      console.log(res);
    });

    window.location.reload();

  }

  getprofile() {
    this.authenService.getCurrentUser().subscribe(res => {
      console.log(res);
      this.userconnecte = res;
      this.iduser = res['id'];
      localStorage.setItem('iduser', res['id']);
      console.log(this.iduser);
   

    });

  }

  accepetreservation(idreservation) {
    this.reservationservice.createReservation(idreservation).subscribe(res1 => {
      console.log(res1);

    });
  }

  deleteresrvation(idreservation) {
    this.reservationservice.deleteReservation(idreservation).subscribe(res => {
      console.log(res);

    });

  }

  deleteresrvationnovalid() {
   

  }

}
