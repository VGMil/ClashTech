import { Component } from '@angular/core';
import { ChoiceCharacterComponent } from './components/choice-character/choice-character.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChoiceCharacterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


}
