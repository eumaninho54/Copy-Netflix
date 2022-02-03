import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-header-logo-netflix',
  templateUrl: './header-logo-netflix.component.html',
  styleUrls: ['./header-logo-netflix.component.scss']
})
export class HeaderLogoNetflixComponent implements OnInit {

  @Input() pathRouter!:string

  constructor() { }

  ngOnInit(): void {
  }

}
