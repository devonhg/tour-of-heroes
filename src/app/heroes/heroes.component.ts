import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

//import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  hero: Hero = {
    name: "Windstorm",
    id: 1
  };

  heroes: Hero[]; 

  selectedHero: Hero; 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    /*
      Unlike the previous code, this new code sees the obsersavble, subscribes to it, and 
      we define what happens once the data comes in. In this case, we specify that the
      observable object as "heroes", then assign it's vallue (an array of heroes) to
      this classes hero property.
    */
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
