import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private isLoggedInService: LoginService, private router: Router) {
    
  }
 OnInit() {
 }

 canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   if (this.isLoggedInService.Logged) {
     this.router.navigate(['/login']);
     alert('You need to log in first to have an access')
    
     return false;
   } else {
    //  console.log("hooooo")
     return true;
   }
 }
}
