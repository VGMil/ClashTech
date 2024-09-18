import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes!: Hero[];
  heroSelected!: Hero;
  constructor() {
    this.heroes = [
      new Hero('./assets/blue-mage.png', 'Mago', 50, 50),
      new Hero('./assets/yellow-warrior.png', 'Guerrero', 100, 35),
      new Hero('./assets/green-healer.png', 'Curandero', 75, 40)
    ]
    this.heroSelected=this.heroes[0];
  }

  getHeroes(): Promise<Hero[]> {
    return new Promise((resolve, reject) => {
      if (this.heroes.length > 0) {
        resolve(this.heroes);
      } else {
        reject("Error: La lista de Heroes esta vacia")
      }
    });
  }

  getHeroesList(): Hero[] {
    return this.heroes;
  }
  getHeroSelected(): Hero {
    return this.heroSelected;
  }
  setHeroSelected(hero: Hero) {
    this.heroSelected = hero;
  }

}
