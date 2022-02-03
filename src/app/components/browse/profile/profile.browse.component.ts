import { userProfiles } from 'src/app/components/browse/browse.model';
import { BrowseService } from './../../../views/browse/browse.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-browse',
  templateUrl: './profile.browse.component.html',
  styleUrls: ['./profile.browse.component.scss']
})
export class ProfileBrowseComponent implements OnInit {

  profiles:userProfiles[] = this.browseService.Profiles

  @Output() isSelectedEmitter = new EventEmitter()

  constructor(
    private router: Router,
    private browseService: BrowseService
  ) { }

  ngOnInit(): void {
  }

  userSelected(id: number){
    this.isSelectedEmitter.emit(this.browseService.verificSelection(id))
  }

}
