import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  

response: boolean;
datoRecibido: any;


  constructor(
    public authService: AuthService,
    public router: Router
  ){ 
    
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //console.log(!this.authService.isAuthenticated());
    
    return this.authService.verificaToken().pipe(map((response: { ok: boolean}) => {

      console.log("Response ok");
      console.log(response.ok);
      
      
      if (response.ok) {
          return true;
          
      }
      this.authService.SignOut();
      this.router.navigate(['sign-in']);

      return false;
  }), catchError((error) => {
      this.router.navigate(['sign-in']);
      return of(false);
  }));
}    
  
}
