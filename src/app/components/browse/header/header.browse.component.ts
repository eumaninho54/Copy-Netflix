import { Router } from '@angular/router';
import { Component, Input, OnInit, HostListener, Renderer2, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-browse',
  templateUrl: './header.browse.component.html',
  styleUrls: ['./header.browse.component.scss']
})
export class HeaderBrowseComponent implements OnInit {

  @Input() pathRouter!:string
  @Output() backProfile = new EventEmitter()

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  backProfiles(){
    this.backProfile.emit(false)
  }

  logout(){
    window.localStorage.clear()
    this.router.navigate(['/'])
  }

}
