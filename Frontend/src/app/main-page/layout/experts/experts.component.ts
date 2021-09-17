import { Component, } from '@angular/core';
import { Expert } from 'src/app/models/user/expert.model';
import { experts } from './data';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent {

  experts: Expert[] = experts;
  searchText: string = "";

  keyup(searchText) { 
    this.searchText = searchText;
  }
}
