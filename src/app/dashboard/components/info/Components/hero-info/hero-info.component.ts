import { Component, Input } from '@angular/core';
import { HeroModel } from '../../../../../core/models/heroModel';
import { NgClass } from '@angular/common';

@Component({
  selector: 'info-hero',
  standalone: true,
  imports: [NgClass],
  templateUrl: './hero-info.component.html',
  styleUrl: './hero-info.component.css'
})
export class HeroInfoComponent {
  @Input({required:true}) hero!:HeroModel;

  getHealth_Percentage(): number {
    const health = (this.hero.getHealth_Quantity() / this.hero.getHealth_Total())*100;
    return Math.max(0, Math.min(100, health));
  }

  getMana_Percentage() {
    const mana = (this.hero.getMana_Quantity() / this.hero.getMana_Total())*100;
    return Math.max(0, Math.min(100, mana));
  }

  
}
