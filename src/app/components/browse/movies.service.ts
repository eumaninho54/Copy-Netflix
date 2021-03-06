import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey:string = "api_key=bb75f23fe046b14ec64e3ade125731aa"
  baseURL:string = "https://api.themoviedb.org/3"

  constructor(
    private http: HttpClient
  ) { }

  read(URL:string): Observable<any>{
    return this.http.get(this.baseURL + URL + this.apiKey)
  }

}
