import { userProfiles } from 'src/app/components/browse/browse.model';
import { ProfileService } from './profile.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-browse',
  templateUrl: './profile.browse.component.html',
  styleUrls: ['./profile.browse.component.scss']
})
export class ProfileBrowseComponent implements OnInit {

  profiles:userProfiles[] = this.ProfileService.Profiles

  @Output() isSelectedEmitter = new EventEmitter()

  constructor(
    private router: Router,
    private ProfileService: ProfileService
  ) { }

  ngOnInit(): void {
  }

  userSelected(id: number){
    this.isSelectedEmitter.emit(this.ProfileService.verificSelection(id))
  }

}
