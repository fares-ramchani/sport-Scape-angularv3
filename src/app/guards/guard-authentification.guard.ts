import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServiceLoginService } from '../services/serviceLogin/service-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  role:String|null=""
  isAuthenticated:String|null=""
  constructor(private serviceLoginService: ServiceLoginService, private router: Router) {
    this.serviceLoginService.role$.subscribe(role => {
      if(localStorage.getItem("role")==null){
        this.role = role;
     
      }else{
        this.role=localStorage.getItem("role");
      }
  
    });

    this.serviceLoginService.role$.subscribe(isAuthenticated => {
    if(localStorage.getItem("isAuthenticated")==null){
      this.isAuthenticated = isAuthenticated;
   
    }else{
      this.isAuthenticated=localStorage.getItem("isAuthenticated");
    }

  });

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.role=="ADMIN"&&this.isAuthenticated=="true") {
      return true; // L'utilisateur est authentifié, permet l'accès à la route
    } else {
      // L'utilisateur n'est pas authentifié, redirige vers la page de connexion
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
