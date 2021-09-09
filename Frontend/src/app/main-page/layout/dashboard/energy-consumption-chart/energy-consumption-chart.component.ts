import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-energy-consumption-chart',
  templateUrl: './energy-consumption-chart.component.html',
  styleUrls: ['./energy-consumption-chart.component.css']
})
export class EnergyConsumptionChartComponent implements OnInit {

  multi!: any[];  //It is getting data from data.ts.
  
  showXAxis: boolean = false;
  showYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Population'; 
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi })
  }

 onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
  }

}
