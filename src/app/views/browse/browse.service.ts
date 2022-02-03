import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { userProfiles } from "src/app/components/browse/browse.model";

@Injectable({
  providedIn: "root",
})
export class BrowseService {

  private authenticProfile: userProfiles | undefined;
  

  Profiles: userProfiles[] = [
    {
      id: 1,
      name: "user",
      image:
        "https://occ-0-1831-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABb7_xK-FFKYnTC7GwGIEmh9SAhb72XwHgWQIDhiX-GmSB0C-Jz7-eMJW8sL8OguWrgFIL3VWSMND6MssBT2-tzzF9Tyw.png?r=e59",
    }
  ];

  constructor(
    private router: Router
  ) {}

  verificSelection(id:number){
    this.authenticProfile = this.Profiles.find( profile => profile.id === id)
    window.localStorage.setItem('profileSelected', JSON.stringify(this.authenticProfile))
    return true
  }


}
