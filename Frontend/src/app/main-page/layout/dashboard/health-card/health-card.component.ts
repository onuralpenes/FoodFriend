import { Component } from '@angular/core';

@Component({
  selector: 'app-health-card',
  templateUrl: './health-card.component.html',
  styleUrls: ['./health-card.component.css']
})
export class HealthCardComponent {
  weight = 85
  height = 181
  age = 21
}
