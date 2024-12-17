import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ContainerComponent} from "./home/container/container.component";
import {HomeComponent} from "./home/home.component";

import {ConducteurComponent} from "./profile/conducteur/conducteur.component";

import {AjoutannonceComponent} from "./annonce/ajoutannonce/ajoutannonce.component";
import {AnnonceComponent} from "./annonce/annonce.component";
import {Erreur404Component} from "./erreur404/erreur404.component";
import {AuthGuard} from "./guard/auth.guard";
// import {NotificationComponent} from './home/nav-bar/notification/notification.component';
// import {NotficationpassagerComponent} from "./home/nav-bar/notficationpassager/notficationpassager.component";
import {ProfiluserComponent} from "./profile/profiluser/profiluser.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterconducteurComponent} from "./register/registerconducteur/registerconducteur.component";
import {RegisterpassagerComponent} from "./register/registerpassager/registerpassager.component";
import { AnnonceUserComponent } from "./annonce-user/annonce-user.component";
import { MethodeComponent } from "./payment/methode/methode.component";
import { PaymentenespeceComponent } from "./payment/paymentenespece/paymentenespece.component";
import { PaymentenligneComponent } from "./payment/paymentenligne/paymentenligne.component";
import { PagesuccessComponent } from "./payment/pagesuccess/pagesuccess.component";
import { ModifierComponent } from "./profile/modifier/modifier.component";

const routes: Routes = [

  { path: "", component: HomeComponent , children:
      [{path: "" , component : ContainerComponent},
        {path: "register", component: RegisterComponent},
        {path: "registerconducteur", component: RegisterconducteurComponent},
        {path: "registerpassager", component: RegisterpassagerComponent},
        {path: "conducteur" , component : ConducteurComponent},
        {path: "profiluser/:id" , component : ProfiluserComponent},
        {path: "listannonce" , component : AnnonceComponent},
        {path: "reclamation" , component : ReclamationComponent},
        {path: "mesannonce" , component : AnnonceUserComponent},
        {path: "update" , component : ModifierComponent},

        // {path: 'notification' , component : NotificationComponent},
        // {path: "notificationpassager" , component : NotficationpassagerComponent},
        {path: "methode" , component : MethodeComponent},
        { path: 'espece', component: PaymentenespeceComponent },
        { path: 'enligne', component: PaymentenligneComponent },
        {path: 'pay/success', component:PagesuccessComponent},
        {path: "ajoutannonce" , component : AjoutannonceComponent},

      ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
