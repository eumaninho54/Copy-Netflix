import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userAuthenticated:boolean = false


  constructor(
    private router: Router
  ) { }

  verificLogin(authenticated:boolean){
    if (authenticated == true) {
      this.userAuthenticated = true
      this.router.navigate(['/browse'])
    }else{
      this.userAuthenticated = false
    }
  }

  authenticatedLogin(){
    return this.userAuthenticated
  }

}
