import { Component } from '@angular/core';
import {AuthentificationService} from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitri9k2';
  constructor(private authservice: AuthentificationService) {

  }

  ngOnInit(): void {

     // this.authservice.loadToken();

  }

}
