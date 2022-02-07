import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../components/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  private verificAcess(){
    if ( this.loginService.authenticatedToken()){
      return true
    } 
  
    this.router.navigate(['/login'])
  
    return false
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.verificAcess()
  }
}
