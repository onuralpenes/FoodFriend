import { Component, OnInit } from '@angular/core';
import { cal } from './data';

@Component({
  selector: 'app-consumed-calorie',
  templateUrl: './consumed-calorie.component.html',
  styleUrls: ['./consumed-calorie.component.css']
})
export class ConsumedCalorieComponent implements OnInit {

  unit = "%";
  sub = "percent";
  calorie = cal
  constructor() {

  }
  ngOnInit() {

  }

}
