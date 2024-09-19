import { Component, inject } from '@angular/core';
import { HeroModel } from '../core/models/heroModel';
import { HeroComponent } from './components/hero-item-select/hero.component';
import { HeroService } from '../core/services/heroService/hero.service';
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
  heroselected!: HeroModel;
  heroes!:HeroModel[];
  constructor(){
    this.heroService.getHeroes().then((heroes) => {
      this.heroes = heroes;
    });
  }
  getselectedHero(newHero:HeroModel){
    this.heroselected = newHero
  }
  setHero() {
   this.heroService.setHeroSelected(this.heroselected);
   this.router.navigate(['/dashboard']);
  }
  
}
