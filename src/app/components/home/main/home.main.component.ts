import { LoginService } from 'src/app/components/login/login.service';
import { Component, ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home-main',
  templateUrl: './home.main.component.html',
  styleUrls: ['./home.main.component.scss']
})
export class HomeMainComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
      
    })
  }

  loginSignIn(){
    this.loginService.verificLogin(true)
  }
}
