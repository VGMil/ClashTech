import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { SkillModel } from '../../../../../core/models/skillModel';
import { NgClass, NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  @Input({ required: true }) skill!: SkillModel;
  @Output() skillSelected = new EventEmitter<SkillModel>();
  @Input({required:true}) selectedSkill:boolean=false;
  @Output() skillAccepted = new EventEmitter<SkillModel>();
  @Input() isSkillDenied!: boolean;

  onSelectSkill(event:Event,skill:SkillModel) {
    event.stopPropagation();
    this.skillSelected.emit(skill);
  }
  acceptSkill(event:Event,skill:SkillModel) {
    event.stopPropagation();
    this.skillAccepted.emit(skill);
    this.selectedSkill = false;
  }
  cancel(event:Event) {
    event.stopPropagation();
    this.skillSelected.emit(new SkillModel());
    this.selectedSkill=false;
  }
  deniedSkill(event:Event){
    event.stopPropagation();
    this.selectedSkill=false;
    this.isSkillDenied = true;
  }



  level_skill: { [key: string]: string } = {
    'Poder Avanzado': 'avanzado.png',
    'Poder intermedio': 'intermedio.png',
    'Poder basico': 'basico.png',
  };

}
