import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { calorie, total , value } from './data';

@Component({
  selector: 'app-consumed-calorie',
  templateUrl: './consumed-calorie.component.html',
  styleUrls: ['./consumed-calorie.component.css']
})
export class ConsumedCalorieComponent implements OnInit {

  tot = total;
  cal = calorie;
  val = value;

  per = (100 * this.cal) / this.tot;
  left = this.tot - this.cal;
  tit = "You eat " + this.cal.toString() + " calorie"
  unit = "";
  sub = "You can eat " + this.left.toString() + " calorie";

  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';

  constructor() {

  }

  blank = "-"; 
  ngOnInit() {

  }

}
