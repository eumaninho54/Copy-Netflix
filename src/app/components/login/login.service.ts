import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userAuthenticated:boolean = false
  private userToken: null | string = null


  constructor(
    private router: Router
  ) { }

  verificLogin(authenticated:boolean){
    if (authenticated == true) {
      this.userAuthenticated = true
      window.localStorage.setItem("tokenLogin", JSON.stringify(this.userAuthenticated))
      this.router.navigate(['/browse'])
    }else{
      this.userAuthenticated = false
    }
  }

  autoLogin(){
    this.userToken = localStorage.getItem('tokenLogin')
    if (!this.userToken){
      return
    }
    this.router.navigate(['/browse'])
  }

  authenticatedLogin(){
    return this.userAuthenticated
  }

  authenticatedToken(){
    this.userToken = localStorage.getItem('tokenLogin')
    return this.userToken
  }

}
