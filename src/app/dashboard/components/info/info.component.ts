import { Component, inject } from '@angular/core';
import { HeroInfoComponent } from './Components/hero-info/hero-info.component';
import { SkillComponent } from './Components/skill/skill.component';
import { HeroModel } from '../../../core/models/heroModel';
import { HeroService } from '../../../core/services/heroService/hero.service';
import { SkillService } from '../../../core/services/skillService/skill.service';
import { SkillModel } from '../../../core/models/skillModel';

import {ScrollingModule} from '@angular/cdk/scrolling'; 
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [HeroInfoComponent,SkillComponent,ScrollingModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  heroService = inject(HeroService);
  skillService = inject(SkillService);
  hero: HeroModel = this.heroService.getHeroSelected();
  skills: SkillModel[] = this.skillService.getSkills(this.hero.getName());
  skillSelected!:SkillModel;
  isSkillDenied: boolean =false;

  getSelectedSkill(newSkill:SkillModel){
    if (this.hero.getMana_Quantity() >= newSkill.getMana()) {
      this.isSkillDenied = false;
    } else {
      this.isSkillDenied = true; 
    }
    this.skillSelected = newSkill;
  }

  getAcceptedSkill(acceptedSkill: SkillModel) {
    if (this.hero.getMana_Quantity() >= acceptedSkill.getMana()) {
      this.hero.removeMana_Quantity(acceptedSkill.getMana());
    } 
    this.skillSelected = new SkillModel();
  }
}
