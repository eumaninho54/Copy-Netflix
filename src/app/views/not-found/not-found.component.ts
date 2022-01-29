import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
    })
  }

  backHome(){
    this.router.navigate(["/"])
  }

}
