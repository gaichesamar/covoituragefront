import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-paymentenligne',
  templateUrl: './paymentenligne.component.html',
  styleUrls: ['./paymentenligne.component.css']
})
export class PaymentenligneComponent implements OnInit {
  paymentForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.paymentForm = this.formBuilder.group({
      price: ['', Validators.required],
      currency: ['', Validators.required],
      intent: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const command = this.paymentForm.value;
      const apiUrl = "http://localhost:9090/createPayment"; 
      const headers = new HttpHeaders({
        'Content-Security-Policy': "default-src 'self' http://localhost:9090" 
      });
    
      this.http.post(apiUrl, command, { headers }).subscribe(
        (response: any) => {
          // Gérer la réponse réussie
          if (response.approvalUrl) {
            // Rediriger l'utilisateur vers l'URL d'approbation de PayPal
            window.location.href = response.approvalUrl;
          } else {
            console.error('URL d\'approbation non trouvée dans la réponse :', response);
          }
        },
        (error: any) => {
          // Gérer la réponse d'erreur
          console.error('Erreur lors de la création du paiement :', error);
          if (error instanceof HttpErrorResponse && error.error instanceof ErrorEvent) {
            // Erreur de type client-side
            console.error('Erreur de parsing JSON :', error.error.message);
          } else {
            // Erreur de type serveur-side
            console.error(`Status: ${error.status}, Message: ${error.message}`);
          }
          // Afficher le message d'erreur à l'utilisateur ou effectuer d'autres actions de gestion des erreurs
        }
      );
    }
  }

  
}