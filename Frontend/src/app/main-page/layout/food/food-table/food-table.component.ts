import { AfterViewInit,Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA, Food } from './data';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements AfterViewInit {

  foods: Food[] = ELEMENT_DATA;
  sortedData = this.foods;

  constructor() { }

  displayedColumns: string[] = ['meal', 'foodCategory', 'foodName', 'calorie', 'protein', 'oil', 'carbohydrate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
