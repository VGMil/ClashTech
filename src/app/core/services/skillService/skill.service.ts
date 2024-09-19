import { Injectable } from '@angular/core';
import { SkillModel } from '../../models/skillModel';
import { skillsData } from './data-skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills!:SkillModel[];

  constructor() {

  }

  getSkills(hero_name:string):SkillModel[]{
    this.skills= skillsData[hero_name]
    return this.skills;
  }
}
