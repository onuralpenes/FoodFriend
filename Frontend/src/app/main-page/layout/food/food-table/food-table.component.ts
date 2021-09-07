import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Food } from 'src/app/models/table/food.model';
import { FOOD_DATA } from './data';
import { EditFood } from './edit-table.component';

export interface Transfer {
  foodName: string;
  calorie: number;
  protein: number;
  oil: number;
  carbohydrate: number;
  foodCategory: string;
  meal: string;
}

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css'],
})
export class FoodTableComponent implements AfterViewInit {
  foods: Food[] = FOOD_DATA; //It is getting data from data.ts.
  sortedData = this.foods; //It is getting data from data.ts.
  isNull: boolean = true;

  constructor(public modal: MatDialog) { }

  displayedColumns: string[] = [
    'meal',
    'foodCategory',
    'foodName',
    'calorie',
    'protein',
    'oil',
    'carbohydrate',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource(FOOD_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  delete() { }

  openEdit(foodName: string, calorie: number, protein: number, oil: number, carbohydrate: number, foodCategory: string, meal: string) {
    this.modal.open(EditFood, {
      data: {
        foodName: foodName,
        calorie: calorie,
        protein: protein,
        oil: oil,
        carbohydrate: carbohydrate,
        foodCategory: foodCategory,
        meal: meal
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.filteredData.length == 0) {
      this.isNull = false;
      console.log(this.dataSource)
    }
    else {
      this.isNull = true;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

