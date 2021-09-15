import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserInfoDto } from 'src/app/models/user/user-dto/user-info-dto.model';
import { ActivityTable } from './activity-table/activity-table.component';
import { USER_DATA } from './data';
import { NutritionTable } from './nutrition-table/nutrition-table.component';
import { PatientTarget } from './target/target.component';

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
  users: UserInfoDto[] = USER_DATA;
  sortedData = this.users;
  isNull: boolean = true;

  constructor(public modal: MatDialog, private router: Router) { }

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'birthDate',
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
        //currentWeight: this.users[id - 1].weight,
      },
    });
  }
}