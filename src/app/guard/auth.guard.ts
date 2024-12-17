import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from '../service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor( private auth: AuthentificationService, private router: Router ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // if (!this.auth.isAuthenticated()) {
    //       //   this.router.navigate(['login']);
    //       //   return false;
    //       // }
    //       // return true;
    if(sessionStorage.getItem('token')=== null){
      this.router.navigate(['']);
      return false;
    }
    return true ;
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token') === null) {
      return true;
    } else {
      return false;
    }}

}


