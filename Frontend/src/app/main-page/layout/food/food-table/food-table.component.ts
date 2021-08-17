import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

interface Food {
  foodName: string;
  calorie: number;
  protein: number;

  carbohydrate: number;
  oil: number;
  foodCategory: string;
  meal: string;
}

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit {

  foods: Food[] = [
    { foodName: 'Frozen yogurt', calorie: 159, oil: 6, carbohydrate: 24, protein: 4, foodCategory: 'yoghurt', meal: 'morning' },
    {
      foodName: 'Ice cream sandwich',
      calorie: 237,
      oil: 9,
      carbohydrate: 37,
      protein: 4,
      foodCategory: 'bread',
      meal: 'dinner',
    },
    { foodName: 'Eclair', calorie: 262, oil: 16, carbohydrate: 24, protein: 6, foodCategory: 'meal', meal: 'lunch'  },
    { foodName: 'Cupcake', calorie: 305, oil: 4, carbohydrate: 67, protein: 4, foodCategory: 'cake', meal: 'snack1' },
    { foodName: 'Gingerbread', calorie: 356, oil: 16, carbohydrate: 49, protein: 4, foodCategory: 'vegetable', meal:'snack2' },
  ];
  sortedData = this.foods;

  constructor() {}

  ngOnInit(): void {
    this.sortedData = this.foods.slice();
  }

  sortData(sort: Sort) {
    const data = this.foods.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'foodfoodName':
          return compare(a.foodName, b.foodName, isAsc);
        case 'calorie':
          return compare(a.calorie, b.calorie, isAsc);
        case 'oil':
          return compare(a.oil, b.oil, isAsc);
        case 'carbohydrate':
          return compare(a.carbohydrate, b.carbohydrate, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        case 'foodCategory':
          return compare(a.foodCategory, b.foodCategory, isAsc);
        default:
        case 'meal':
          return compare(a.meal, b.meal, isAsc);
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
