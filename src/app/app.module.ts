import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DateValueAccessorModule} from "angular-date-value-accessor";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ContainerComponent} from "./home/container/container.component";
import {FooterComponent} from "./home/footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {NavBarComponent} from "./home/nav-bar/nav-bar.component";
import {ConducteurComponent} from "./profile/conducteur/conducteur.component";

import {AnnonceComponent} from "./annonce/annonce.component";
import {Erreur404Component} from "./erreur404/erreur404.component";

import {AgmCoreModule} from "@agm/core";
import {DatePipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
//import {DatePickerModule} from "@syncfusion/ej2-angular-calendars";
import {AgmDirectionModule} from "agm-direction";
import {BsDatepickerModule} from "ngx-bootstrap";
import {AjoutannonceComponent} from "./annonce/ajoutannonce/ajoutannonce.component";
import {GooglePlacesDirective} from "./annonce/ajoutannonce/google-places.directive";
import {MustMatchDirective} from "./helpes/must-match-directive";
import {RegisterComponent} from "./register/register.component";
import {RegisterconducteurComponent} from "./register/registerconducteur/registerconducteur.component";
import {RegisterpassagerComponent} from "./register/registerpassager/registerpassager.component";


import {MatCardModule} from "@angular/material/card";
import{MatFormFieldModule}from "@angular/material/form-field";
import{MatInputModule}from "@angular/material/input";
import{MatIconModule}from "@angular/material/icon";
import{MatRadioModule}from "@angular/material/radio";




import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxInputStarRatingModule} from "@ngx-lite/input-star-rating";
import {StarRatingModule} from "angular-star-rating";
import {ProfiluserComponent} from "./profile/profiluser/profiluser.component";
import {AnnoncePipe} from "./recherch/annonce.pipe";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import { ModifierComponent } from './profile/modifier/modifier.component';
import { VoitureComponent } from './voiture/voiture.component';
import { AnnonceUserComponent } from './annonce-user/annonce-user.component';
import { MethodeComponent } from './payment/methode/methode.component';
import { PagesuccessComponent } from './payment/pagesuccess/pagesuccess.component';
import { PaymentenespeceComponent } from './payment/paymentenespece/paymentenespece.component';
import { PaymentenligneComponent } from './payment/paymentenligne/paymentenligne.component';
import { UserComponent } from './annonce/user/user.component';

@NgModule({
  declarations: [MustMatchDirective,
    AppComponent, NavBarComponent,
    ContainerComponent, ReclamationComponent,
    FooterComponent, GooglePlacesDirective,
    HomeComponent, ConducteurComponent, AnnonceComponent,
    Erreur404Component, AjoutannonceComponent, RegisterconducteurComponent,
    RegisterpassagerComponent, RegisterComponent, AnnoncePipe, ProfiluserComponent, ModifierComponent, VoitureComponent, AnnonceUserComponent, MethodeComponent, PagesuccessComponent, PaymentenespeceComponent, PaymentenligneComponent, UserComponent,
  ],
  imports: [NgxInputStarRatingModule, StarRatingModule.forRoot(), AgmCoreModule.forRoot({
    apiKey: "AIzaSyAZvKyImmqK3NGHT1UiisbfKGN5Lua_mho",
  }),
    BrowserModule, DateValueAccessorModule, AgmDirectionModule,
    AppRoutingModule, NgbModule, FormsModule, HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, BsDatepickerModule.forRoot(),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {
}
