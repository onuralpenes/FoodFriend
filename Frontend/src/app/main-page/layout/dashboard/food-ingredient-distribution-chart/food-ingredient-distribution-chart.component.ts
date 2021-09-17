import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-food-ingredient-distribution-chart',
  templateUrl: './food-ingredient-distribution-chart.component.html',
  styleUrls: ['./food-ingredient-distribution-chart.component.css']
})
export class FoodIngredientDistributionChartComponent implements OnInit {

  single!: any[];  //It is getting data from data.ts.

  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { 
    Object.assign(this, { single });
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
