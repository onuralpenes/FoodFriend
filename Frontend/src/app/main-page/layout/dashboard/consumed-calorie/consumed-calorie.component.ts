import { Component, OnInit } from '@angular/core';
import { calorie, total } from './data';

@Component({
  selector: 'app-consumed-calorie',
  templateUrl: './consumed-calorie.component.html',
  styleUrls: ['./consumed-calorie.component.css']
})
export class ConsumedCalorieComponent implements OnInit {

  tot = total;
  cal = calorie;
  per = (100 * this.cal) / this.tot;
  left = this.tot - this.cal;
  tit = "You eat " + this.cal.toString() + " calorie"
  unit = "";
  sub = "You can eat " + this.left.toString() + " calorie";
  constructor() {

  }
  ngOnInit() {

  }

}
