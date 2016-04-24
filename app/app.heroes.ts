import {Component} from 'angular2/core';
import {HeroService} from './service';
import {Hero} from './hero';

@Component({
  selector: 'hero-list',
  providers: [HeroService],
  templateUrl: 'app/hero.html'
})

export class AppHeroes {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    this.heroes = heroService.getAll();
  }

  onSelect = (hero: Hero) => this.selectedHero = hero;
}
