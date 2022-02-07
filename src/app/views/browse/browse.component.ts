import { ProfileService } from '../../components/browse/profile/profile.service';
import { Component, OnInit } from '@angular/core';

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
  }

  changeIsSelected(change: boolean){
    this.isSelected = change
  }

  changeIsLoad(change: boolean){
    this.isLoad = change
  }

}
