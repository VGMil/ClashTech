import { Component, inject } from '@angular/core';
import { Hero } from '../../models/hero';
import { ChoiceCharacterCase } from '../../uses-cases/choice-character.case';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-choice-character',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './choice-character.component.html',
  styleUrl: './choice-character.component.css'
})
export class ChoiceCharacterComponent {
  choiceCharacterCase  = inject(ChoiceCharacterCase);
  heroselected!: Hero;
  heroes!:Hero[];
  constructor(){
    this.choiceCharacterCase.getAllCharacters().then((heroes) => {
      this.heroes = heroes;
    });
  }
  getselectedHero(newHero:Hero){
    this.heroselected = newHero
  }
  setHero() {
   this.choiceCharacterCase.setSelectedCharacter(this.heroselected);
  }
  
}
