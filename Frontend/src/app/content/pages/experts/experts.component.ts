import { Component, } from '@angular/core';
import { Expert } from 'src/app/models/core/expert.model';
import { experts } from './data';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent {
  experts: Expert[] = experts;
  searchText: string = "";
  loaded = false;

  keyup(searchText) {
    this.searchText = searchText;
  }
}
