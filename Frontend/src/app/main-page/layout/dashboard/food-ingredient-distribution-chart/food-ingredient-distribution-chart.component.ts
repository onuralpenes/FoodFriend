import { Component } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-food-ingredient-distribution-chart',
  templateUrl: './food-ingredient-distribution-chart.component.html',
  styleUrls: ['./food-ingredient-distribution-chart.component.css']
})
export class FoodIngredientDistributionChartComponent {

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
}
