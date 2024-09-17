import { Component } from '@angular/core';
import { HeroComponent } from '../../../core/components/hero/hero.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  skills: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML'];
}
