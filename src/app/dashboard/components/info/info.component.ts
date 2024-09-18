import { Component } from '@angular/core';
import { HeroInfoComponent } from './Components/hero-info/hero-info.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [HeroInfoComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  skills: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML'];
}
