import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-short-card',
  templateUrl: './expert-short-card.component.html',
  styleUrls: ['./expert-short-card.component.css']
})
export class ExpertShortCardComponent {
  @Input() expert;

  details = false;

  detailExpert() {
    this.details = !this.details;
  }
}
