import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  Activity,
  ACTIVITY_DATA,
  Food,
  FOOD_DATA,
  User,
  USER_DATA,
} from './data';

export interface Transfer {
  name: string;
  id: number;
}

export interface Transfer2 {
  name: string,
  target: boolean,
  startingDate: Date,
  endDate: Date,
  startingWeight: number,
  targetWeight: number,
  currentWeight: number
}

@Component({
  selector: 'app-patient-trace-table',
  templateUrl: './patient-trace-table.component.html',
  styleUrls: ['./patient-trace-table.component.css'],
})
export class PatientTraceTableComponent implements AfterViewInit {
  users: User[] = USER_DATA;
  sortedData = this.users;

  constructor(public modal: MatDialog, private router: Router  ) { }

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

  open(id: number){
    this.router.navigate(['/counselee-profile']);
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
        currentWeight: this.users[id-1].weight,
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

  public targetForm: FormGroup;
  startingWeight !: number;
  targetWeight !: number;
  startingDate !: Date;
  endDate!: Date;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer2, public modal: MatDialog, private formBuilder: FormBuilder) {
    this.targetForm = this.formBuilder.group({
      'startingDate': [null],
      'endDate': [null],
      'startingWeight': [null],
      'targetWeight': [null, Validators.required]
    });
  }


  openLose(name: string, target: boolean) {
    this.startingWeight = this.targetForm.get('startingWeight')?.value;
    this.targetWeight = this.targetForm.get('targetWeight')?.value;
    this.startingDate = this.targetForm.get('startingDate')?.value;
    this.endDate = this.targetForm.get('endDate')?.value;

    this.modal.open(PatientTargetCard, {
      data: {
        name: name,
        target: target,
        startingDate: this.startingDate,
        endDate: this.endDate,
        startingWeight: this.startingWeight,
        targetWeight: this.targetWeight,
        currentWeight: this.data.currentWeight
      }
    });
  }

  openGain(name: string, target: boolean) {
    this.startingWeight = this.targetForm.get('startingWeight')?.value;
    this.targetWeight = this.targetForm.get('targetWeight')?.value;
    this.startingDate = this.targetForm.get('startingDate')?.value;
    this.endDate = this.targetForm.get('endDate')?.value;

    this.modal.open(PatientTargetCard, {
      data: {
        name: name,
        target: target,
        startingDate: this.startingDate,
        endDate: this.endDate,
        startingWeight: this.startingWeight,
        targetWeight: this.targetWeight,
        currentWeight: this.data.currentWeight
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
    if (data.startingDate == null) {
      this.startingDate = new Date();
    }
    else {
      this.startingDate = data.startingDate;
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
    if (data.startingWeight == null) {
      this.startingWeight = 100;
    }
    else {
      this.startingWeight = data.startingWeight;
    }
    this.targetWeight = this.data.targetWeight;
    this.currentWeight = this.data.currentWeight;
    this.weight_percent = 100 * (this.startingWeight - this.currentWeight) / (this.startingWeight - this.targetWeight);
    if(data.endDate == null){
      this.dateProg = 0;
    }
    else{
      var monthEnd = data.endDate.getUTCMonth() + 1;
      var dayEnd = data.endDate.getUTCDate();
      var yearEnd = data.endDate.getUTCFullYear();

      var monthSt = this.startingDate.getUTCMonth() + 1;
      var daySt = this.startingDate.getUTCDate();
      var yearSt = this.startingDate.getUTCFullYear();

      var monthCr = this.currentDate.getUTCMonth() + 1;
      var dayCr = this.currentDate.getUTCDate();
      var yearCr = this.currentDate.getUTCFullYear();

      var currentProgress = this.currentDate.getTime() - this.startingDate.getTime();
      var endProgress = data.endDate.getTime() - this.startingDate.getTime();
      console.log(currentProgress)
      console.log(data.endDate.getTime() - this.startingDate.getTime())

      new Date(currentProgress);

      // this.dateProg = 100 * ((yearEnd - yearCr)*365 + (monthEnd - monthCr)*30 + (dayEnd - dayCr)) / ((yearEnd - yearSt)*365 + (monthEnd - monthSt)*30 + (dayEnd - daySt));
      this.dateProg = 100 * currentProgress / endProgress;
    }
  }

  target!: string;
  startingDate !: Date;
  startingWeight !: number;
  endDate: any;
  targetWeight !: number;
  currentDate: Date = new Date();
  currentWeight !: number;
  weight_percent !: number;
  dateProg !: number;

  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';

}
