import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

export interface Transfer2 {
  name: string,
  target: boolean,
  endDate: Date,
  targetWeight: number,
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
  endDate!: Date;
  public targetForm: FormGroup;
  targetWeight!: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer, public modal: MatDialog, private formBuilder: FormBuilder) {
    this.targetForm = this.formBuilder.group({
      'endDate': [null, Validators.required],
      'targetWeight': [null]
    });
  }


  openLose(name: string, target: boolean, targetWeight: number) {
    this.targetWeight = this.targetForm.get('targetWeight')?.value;
    this.endDate = this.targetForm.get('endDate')?.value;

    this.modal.open(PatientTargetCard, {
      data: {
        name: name,
        target: target,
        endDate: this.endDate,
        targetWeight: targetWeight,
      }
    });
  }

  openGain(name: string, target: boolean, targetWeight: number) {
    this.targetWeight = this.targetForm.get('targetWeight')?.value;
    this.endDate = this.targetForm.get('endDate')?.value;

    this.modal.open(PatientTargetCard, {
      data: {
        name: name,
        target: target,
        endDate: this.endDate,
        targetWeight: this.targetWeight,
      }

    });
  }

}

@Component({
  selector: 'app-target-card',
  templateUrl: './target-card.html',
  styleUrls: ['./target.css'],
})
export class PatientTargetCard {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer2) {
    if (!data.target) {
      this.target = "Lose Weight";
    }
    else {
      this.target = "Gain Weight";
    }
    if (data.endDate == null) {
      this.endDate = "unspecified";
    }
    else {
      var month = data.endDate.getUTCMonth() + 1;
      var day = data.endDate.getUTCDate();
      var year = data.endDate.getUTCFullYear();

      this.endDate = day + "/" + month + "/" + year;
    }
  }

  target!: string;
  startingDate = TARGET_DATA.startingDate;
  startingWeight = TARGET_DATA.startingWeight;
  endDate: any;
  targetWeight = this.data.targetWeight;
  currentWeight = TARGET_DATA.currentWeight;

  weight_percent = 100 * (this.startingWeight - this.currentWeight) / (this.startingWeight - this.targetWeight);

  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';

}