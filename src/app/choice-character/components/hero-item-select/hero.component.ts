import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../core/models/hero';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  @Input({ required: true }) selectHero!: Hero;
  @Input({ required: true }) hero!: Hero;
  @Output() heroSelected = new EventEmitter<Hero>();

  onSelect(hero: Hero) {
    this.heroSelected.emit(hero);
  }

  getHeroClasses(): string {
    let classes = '';
    if (this.selectHero == this.hero) {
      classes += 'active '+this.selectHero.getName();
    }
    return classes;
  }

}
