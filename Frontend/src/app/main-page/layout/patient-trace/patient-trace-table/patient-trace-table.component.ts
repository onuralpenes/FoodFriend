import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/helpers/alert.service';
import { User } from 'src/app/models/user/user.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { ActivityTable } from './activity-table/activity-table.component';
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
export class PatientTraceTableComponent {
  users: User[] = [];
  isNull: boolean = true;

  constructor(public modal: MatDialog, private router: Router, private alertService: AlertService, entityService: HttpEntityRepositoryService<User>) {
    entityService.getAll("/User/GetAll").subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.users = Data.data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
      this.Begin();
    });

  }

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'birthDate',
    'target',
    'foodData',
    'activityData',
  ];
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  Begin() {
    if (this.dataSource.filteredData.length == 0) {
      this.isNull = false;
    }
    else {
      this.isNull = true;
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.filteredData.length == 0) {
      this.isNull = false;
    }
    else {
      this.isNull = true;
    }
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