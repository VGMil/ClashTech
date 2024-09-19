import { Injectable } from '@angular/core';
import { HeroModel } from '../../models/heroModel';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes!: HeroModel[];
  heroSelected!: HeroModel;
  constructor() {
    this.heroes = [
      new HeroModel('./assets/heroes/blue-mage.png', 'Mago', 50, 50),
      new HeroModel('./assets/heroes/yellow-warrior.png', 'Guerrero', 100, 35),
      new HeroModel('./assets/heroes/green-healer.png', 'Curandero', 75, 40)
    ]
    // this.heroSelected=this.heroes[0];
  }

  getHeroes(): Promise<HeroModel[]> {
    return new Promise((resolve, reject) => {
      if (this.heroes.length > 0) {
        resolve(this.heroes);
      } else {
        reject("Error: La lista de Heroes esta vacia")
      }
    });
  }

  getHeroesList(): HeroModel[] {
    return this.heroes;
  }
  getHeroSelected(): HeroModel {
    return this.heroSelected;
  }
  setHeroSelected(hero: HeroModel) {
    this.heroSelected = hero;
  }

}
