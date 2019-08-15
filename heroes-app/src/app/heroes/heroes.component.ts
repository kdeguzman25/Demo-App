import { Component, OnInit } from '@angular/core'; 
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroesList: any;
  activeIndex: number = 0;

  constructor(
    private heroes: HeroesService
  ) { }

  ngOnInit() {
    this.initializeHeroes();
  }

  /* 
    Initialized the value of country data, region data
  */
  initializeHeroes() {
    this.heroes.getHeroes().subscribe(res => {  
      this.heroesList = res;
      console.log(res)
    });
  
  }
  
  toggleClass(i: number): void {
    this.activeIndex = i;
  }

}
