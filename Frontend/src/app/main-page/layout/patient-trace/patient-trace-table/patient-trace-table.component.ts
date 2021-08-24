import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  Activity,
  ACTIVITY_DATA,
  Food,
  FOOD_DATA,
  User,
  USER_DATA,
} from './data';
import { TARGET_DATA } from './targetdata';

export interface Transfer {
  name: string;
  id: number;
}

@Component({
  selector: 'app-patient-trace-table',
  templateUrl: './patient-trace-table.component.html',
  styleUrls: ['./patient-trace-table.component.css'],
})
export class PatientTraceTableComponent implements AfterViewInit {
  users: User[] = USER_DATA;
  sortedData = this.users;

  constructor(public modal: MatDialog) { }

  displayedColumns: string[] = [
    'name',
    'surname',
    'birthdate',
    'height',
    'weight',
    'bloodType',
    'smoking',
    'alcohol',
    'exercise',
    'target',
    'foodData',
    'activityData',
  ];
  dataSource = new MatTableDataSource(USER_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  openActivity(name: string, surname: string, id: number) {
    this.modal.open(ActivityTable, {
      data: {
        name: name + ' ' + surname,
        id: id,
      },
    });
  }

  openFood(name: string, surname: string, id: number) {
    this.modal.open(NutritionTable, {
      data: {
        name: name + ' ' + surname,
        id: id,
      },
    });
  }

  openTarget(name: string, surname: string, id: number) {
    this.modal.open(PatientTarget, {
      data: {
        name: name + ' ' + surname,
        id: id,
      },
    });
  }
}
@Component({
  selector: 'app-nut-table',
  templateUrl: './nutrition-table.html',
  styleUrls: ['./patient-trace-table.component.css'],
})
export class NutritionTable implements AfterViewInit {
  foods: Food[] = FOOD_DATA;
  sortedData = this.foods;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer) { }

  displayedColumns: string[] = [
    'meal',
    'foodCategory',
    'foodName',
    'calorie',
    'protein',
    'oil',
    'carbohydrate',
  ];
  dataSource = new MatTableDataSource(
    this.foods.filter((food) => food.id === this.data.id)
  );

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
  selector: 'app-act-table',
  templateUrl: './activity-table.html',
  styleUrls: ['./patient-trace-table.component.css'],
})
export class ActivityTable implements AfterViewInit {
  activities: Activity[] = ACTIVITY_DATA;
  sortedData = this.activities;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer) { }

  displayedColumns: string[] = [
    'activityType',
    'activityPeriod',
    'activityEffortSpent',
    'activityEfforUnit',
    'activityStartDate',
    'activityEndDate',
  ];
  dataSource = new MatTableDataSource(
    this.activities.filter((activity) => activity.id === this.data.id)
  );

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
  selector: 'app-target',
  templateUrl: './target.html',
  styleUrls: ['./target.css'],
})
export class PatientTarget {

  target = TARGET_DATA.target;
  startingDate = TARGET_DATA.startingDate;
  startingWeight = TARGET_DATA.startingWeight;
  endDate = TARGET_DATA.endDate;
  targetWeight = TARGET_DATA.targetWeight;
  currentWeight = TARGET_DATA.currentWeight;

  weight_percent = 100 * (this.startingWeight - this.currentWeight) / (this.startingWeight - this.targetWeight)

  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer) { }

}