import { Injectable, inject } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class ChoiceCharacterCase {
  heroService = inject(HeroService)
  selectedCharacter?: Hero;

  constructor() { }

  getAllCharacters(): Promise<Hero[]> {
    return this.heroService.getHeroes();
  }

  setSelectedCharacter(hero: Hero) {
    this.selectedCharacter = hero;
  }
}
