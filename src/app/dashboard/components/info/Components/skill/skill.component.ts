import { Component, Input } from '@angular/core';
import { SkillModel } from '../../../../../core/models/skillModel';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  @Input({ required: true }) skill!: SkillModel;

  level_skill: { [key: string]: string } = {
    'Poder Avanzado': 'avanzado.png',
    'Poder intermedio': 'intermedio.png',
    'Poder basico': 'basico.png',
  };

}
