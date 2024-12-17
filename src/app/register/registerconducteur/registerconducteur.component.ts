import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {AuthentificationService, ConducteurserviceService} from '../../service';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {ImageService} from '../../service/image.service';

@Component({
  selector: 'app-registerconducteur',
  templateUrl: './registerconducteur.component.html',
  styleUrls: ['./registerconducteur.component.css']
})
export class RegisterconducteurComponent implements OnInit {

 constructor(private service:  AuthentificationService ,  private imsr: ImageService,  private router: Router) { }
  data: any
  photo;
  filesToUpload!: Array<File>;
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required])


  })
 ngOnInit(): void {
  }
  submit(){
    this.data ={
      
          photo: this.filesToUpload[0].name,
          username: this.form.value.username,
          firstname: this.form.value.firstname,
          lastname: this.form.value.lastname,
          email: this.form.value.email,
          password: this.form.value.password,
          adress:this.form.value.adress,
          dateOfBirth:this.form.value.dateOfBirth,
          telephone:this.form.value. telephone
        }
        console.log(this.data)

        this.service.create(this.data).subscribe(data => {
          this.imsr.pushFileToStorage(this.filesToUpload[0]).subscribe((rest: any) => {
            
            console.log(rest);
        
           
          });
          console.log(data)
        });
        
        this.router.navigate(['/']);
  }
  recuperFile(file:any) {
    this.filesToUpload = <Array<File>> file.target.files;

    this.photo = file.target.files[0]['name'];
  }
  
}




