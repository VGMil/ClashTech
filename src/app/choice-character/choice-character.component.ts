import { Component, inject } from '@angular/core';
import { Hero } from '../core/models/hero';
import { HeroComponent } from './components/hero-item-select/hero.component';
import { HeroService } from '../core/services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice-character',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './choice-character.component.html',
  styleUrl: './choice-character.component.css'
})
export class ChoiceCharacterComponent {
  heroService  = inject(HeroService);
  router = inject(Router);
  heroselected!: Hero;
  heroes!:Hero[];
  constructor(){
    this.heroService.getHeroes().then((heroes) => {
      this.heroes = heroes;
    });
  }
  getselectedHero(newHero:Hero){
    this.heroselected = newHero
  }
  setHero() {
   this.heroService.setHeroSelected(this.heroselected);
   this.router.navigate(['/dashboard']);
  }
  
}
