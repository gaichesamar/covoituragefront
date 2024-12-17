import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {ReclamationService} from '../service/reclamation.service';
import {AuthentificationService} from '../service';
import { CreateReclamationRequest } from '../service/CreateReclamationRequest';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  username: any;
  constructor(private service:  ReclamationService, private router: Router,private ser:AuthentificationService) { }
  data: any
  
  sujet!: string;
  description!: string;
  ngOnInit(): void {
  }
  createReclamation() {
    const request: CreateReclamationRequest = {
      sujet: this.sujet,
      description: this.description,
      idUser: localStorage.getItem("iduser")
    };
  
    this.service.createReclamation(request).subscribe(
      (response: any) => {
        console.log(response); 
  
        try {
          const data = JSON.parse(response.text); 
          console.log(data); 
          this.router.navigate(['/']);

        } catch (error) {
          console.error('Erreur lors de l\'analyse de la réponse JSON:', error);
          this.router.navigate(['/']);

        }
      },
      (error: any) => {
        console.error(error);
        this.router.navigate(['/']);

      }
    );
    this.router.navigate(['/']);

  }

  
  
  
  

  getUsername() {
    this.ser.getUsername().subscribe((response) => {
      this.username = response['username'];
    });
  }

  deleteAccount() {
    this.ser.deleteUser().subscribe(() => {
      alert('Account deleted successfully.');
    });
  }
  logout() {
    localStorage.removeItem('access_token');
  
    this.router.navigate(['/login']);
  }
  
}