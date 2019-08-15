import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiURL: string; 

  constructor(
    private httpClient: HttpClient
  ) {
    this.apiURL = "http://tlcnursingagency.com/hataw/wpsg/wp-json/heroes-plugin/v1/my-heroes"; 
  }

    // Get Heroes
    public getHeroes(): Observable<any> {
      return this.httpClient.get(this.apiURL);
    }
}
