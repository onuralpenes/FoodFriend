import { Component, OnInit } from '@angular/core';
import { CALORIE_DATA } from './data';

@Component({
  selector: 'app-consumed-calorie',
  templateUrl: './consumed-calorie.component.html',
  styleUrls: ['./consumed-calorie.component.css']
})
export class ConsumedCalorieComponent {

  tot = CALORIE_DATA.total;
  cal = CALORIE_DATA.calorie;

  per = (100 * this.cal) / this.tot;
  left = this.tot - this.cal;
  tit = "You eat " + this.cal.toString() + " calorie"
  unit = "";
  sub = "You can eat " + this.left.toString() + " calorie";
}
