import { Component, Input, OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header-browse',
  templateUrl: './header.browse.component.html',
  styleUrls: ['./header.browse.component.scss']
})
export class HeaderBrowseComponent implements OnInit {

  @Input() pathRouter!:string

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

}
