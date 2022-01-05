import { Component, Input } from "@angular/core";
@Component({
  selector: 'app-purpose-card',
  templateUrl: './purpose-card.component.html',
  styleUrls: ['./purpose-card.component.css'],
})
export class PurposeCardComponent {
  @Input() purpose;
}
