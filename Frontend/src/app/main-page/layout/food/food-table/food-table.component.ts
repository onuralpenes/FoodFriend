import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FOOD_DATA, Food } from './data';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css'],
})
export class FoodTableComponent implements AfterViewInit {
  foods: Food[] = FOOD_DATA; //It is getting data from data.ts.
  sortedData = this.foods; //It is getting data from data.ts.

  constructor() {}

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

  delete() {}

  edit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
