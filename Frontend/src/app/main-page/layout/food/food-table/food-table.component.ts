import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FOOD_DATA, Food } from './data';

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
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.html',
  styleUrls: ['./food-table.component.css'],
})
export class EditFood{
  editForm!: FormGroup;
  post: any = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      'meal': new FormControl(this.data.meal),
      'foodCategory': new FormControl(this.data.foodCategory),
      'foodName': new FormControl(this.data.foodName),
      'calorie': new FormControl(this.data.calorie),
      'protein': new FormControl(this.data.protein),
      'oil': new FormControl(this.data.oil),
      'carbohydrate': new FormControl(this.data.carbohydrate),
    });
  }

  onSubmit(post) {
    this.post = post;
  }
}
