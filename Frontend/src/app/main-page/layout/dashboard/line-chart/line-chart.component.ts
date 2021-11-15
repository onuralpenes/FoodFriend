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
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public line_ChartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]];
    public line_ChartOptions = {
      title: 'Company Performance',
      curveType: 'function',
      legend: {
          position: 'bottom'
      }
  };
  public chart: any[] = [];

  constructor() { 
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    // var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    // chart.draw(data, options);
  }

  ngOnInit(): void {
  }

}
