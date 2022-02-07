import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../components/login/login.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
    })
    this.loginService.autoLogin()
  }

}
