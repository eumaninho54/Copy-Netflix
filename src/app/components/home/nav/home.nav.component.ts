import { Component, ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home.nav.component.html',
  styleUrls: ['./home.nav.component.scss']
})
export class HomeNavComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
      
    })
  }
}
