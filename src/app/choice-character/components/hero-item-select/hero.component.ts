import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroModel } from '../../../core/models/heroModel';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  @Input({ required: true }) selectHero!: HeroModel;
  @Input({ required: true }) hero!: HeroModel;
  @Output() heroSelected = new EventEmitter<HeroModel>();

  onSelect(hero: HeroModel) {
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
