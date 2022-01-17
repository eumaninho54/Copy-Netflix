import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
      
    })
  }

}
