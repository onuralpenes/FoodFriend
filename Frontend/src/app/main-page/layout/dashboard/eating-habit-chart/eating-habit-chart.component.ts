import { Component } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-eating-habit-chart',
  templateUrl: './eating-habit-chart.component.html',
  styleUrls: ['./eating-habit-chart.component.css']
})
export class EatingHabitChartComponent {

  multi!: any[];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
  }
}
