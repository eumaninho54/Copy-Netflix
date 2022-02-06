import { ProfileService } from '../../components/browse/profile/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit{

  isSelected!: boolean;

  constructor(
    private ProfileService: ProfileService
  ) { }

  ngOnInit(): void {
    if(window.localStorage.getItem('profileSelected') != null){
      this.isSelected = true
    }else{
      this.isSelected = false
    }
  }

  changeIsSelected(change: boolean){
    this.isSelected = change
  }

}
