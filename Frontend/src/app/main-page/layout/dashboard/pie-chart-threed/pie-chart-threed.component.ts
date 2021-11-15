import { Component, OnInit } from '@angular/core';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';

@Component({
  selector: 'app-pie-chart-threed',
  templateUrl: './pie-chart-threed.component.html',
  styleUrls: ['./pie-chart-threed.component.css']
})
export class PieChartThreedComponent implements OnInit {
  
  public chart: any[] = [];
  constructor() {
    this.chart.push({
      title: 'Your Daily Activities',
      type: ChartType.PieChart,
      columns:  ['Browser', 'Percentage'],
      data: [
        ['Protein', 12],
        ['Carbohydrate', 11],
        ['Oil', 2],
      ],
      options: {
        is3D: true,
        colors: ['#ea3c2b','#c19557', '#f6aa33'],
        backgroundColor: 'transparent',
      }
    })
   }

  ngOnInit(): void {
  }

}
