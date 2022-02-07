import { ProfileService } from '../../components/browse/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit{

  isSelected: boolean = false;
  isLoad: boolean = false;

  constructor(
    private ProfileService: ProfileService
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
    })
  }

  changeIsSelected(change: boolean){
    this.isSelected = change
  }

  changeIsLoad(change: boolean){
    this.isLoad = change
  }

  backFromProfiles(change: boolean){
    this.isSelected = change
    this.isLoad = change
  }

}
