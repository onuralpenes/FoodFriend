import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/table/patient-activity.model';
import { Food } from 'src/app/models/table/patient-food.model';
import { User } from 'src/app/models/user/user.model';
import {ACTIVITY_DATA,FOOD_DATA,USER_DATA} from './data';

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
  isNull: boolean = true;

  constructor(public modal: MatDialog, private router: Router) { }

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'birthDate',
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

  open(id: number) {
    this.router.navigate(['/counselee-profile']);
  }

  openActivity(firstName: string, lastName: string, id: number) {
    this.modal.open(ActivityTable, {
      data: {
        name: firstName + ' ' + lastName,
        id: id,
      },
    });
  }

  openFood(firstName: string, lastName: string, id: number) {
    this.modal.open(NutritionTable, {
      data: {
        name: firstName + ' ' + lastName,
        id: id,
      },
    });
  }

  openTarget(firstName: string, lastName: string, id: number) {
    this.modal.open(PatientTarget, {
      data: {
        name: firstName + ' ' + lastName,
        id: id,
        currentWeight: this.users[id - 1].weight,
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
  isNull: boolean = true;

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

@Component({
  selector: 'app-act-table',
  templateUrl: './activity-table.html',
  styleUrls: ['./patient-trace-table.component.css'],
})
export class ActivityTable implements AfterViewInit {
  activities: Activity[] = ACTIVITY_DATA;
  sortedData = this.activities;
  isNull: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer) { }

  displayedColumns: string[] = [
    'activityType',
    'activityPeriod',
    'activityEffortSpent',
    'activityeffortUnit',
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
      'startingDate': new FormControl(''),
      'endDate': new FormControl(''),
      'startingWeight': new FormControl(''),
      'targetWeight': new FormControl('', [Validators.required])
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
    if (data.endDate == null) {
      this.dateProg = 0;
    }
    else {
      var currentProgress = this.currentDate.getTime() - this.startingDate.getTime();
      var endProgress = data.endDate.getTime() - this.startingDate.getTime();
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
