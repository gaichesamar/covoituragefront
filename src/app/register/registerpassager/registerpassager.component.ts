import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {AuthentificationService} from '../../service';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {PassagerService} from '../../service/passager.service';

@Component({
  selector: 'app-registerpassager',
  templateUrl: './registerpassager.component.html',
  styleUrls: ['./registerpassager.component.css']
})
export class RegisterpassagerComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user = new User();

  public minDate: Date = new Date ("05/07/2017");
  public maxDate: Date = new Date ("05/27/2017");
  public value: Date = new Date();


  constructor(private formBuilder: FormBuilder,private passagerservice: PassagerService, private  router: Router) {
  }


  ngOnInit() {


    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      genre: ['', Validators.required],
      tel: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)],
      confirmedPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmedPassword')
    });
    return of(null);
  }
  get f() {
    return this.registerForm.controls;
  }







  inscrit() {
    this.submitted = true;
    const data={
      username: this.registerForm.value["username"],
      firstName: this.registerForm.value["firstName"],
      lastName: this.registerForm.value["lastName"],
      genre: this.registerForm.value["genre"],
      email: this.registerForm.value["email"],
      tel: this.registerForm.value["tel"],
      birthdate: this.registerForm.value["birthdate"],
      password:this.registerForm.value["password"],
      confirmedPassword:this.registerForm.value["confirmedPassword"]}
    console.log(data);
    this.passagerservice.addpassager(data).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['']);
      }
    );
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }



}
