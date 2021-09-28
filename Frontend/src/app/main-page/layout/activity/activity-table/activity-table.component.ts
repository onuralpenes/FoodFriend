import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonalEnergyActivity } from 'src/app/models/data/energy-activity.model';
import { AddActivity } from './add-activity/add-activity.component';
import { ACTIVITY_DATA } from './data';
import { EditActivity } from './edit-activity.component';

export interface Transfer {
  activityType: string;
  activityPeriod: number;
  activityEffortSpent: number;
  activityeffortUnit: number;
  activityStartDate: Date;
  activityEndDate: Date;
}  

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css'],
})
export class ActivityTableComponent implements AfterViewInit {
  activities: PersonalEnergyActivity[] = ACTIVITY_DATA; //It is getting data from data.ts.
  sortedData = this.activities; //It is getting data from data.ts.
  isNull: boolean = true;

  constructor(public modal: MatDialog) { }

  displayedColumns: string[] = [
    'activityType',
    'activityPeriod',
    'activityEffortSpent',
    'activityeffortUnit',
    'activityStartDate',
    'activityEndDate',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource(ACTIVITY_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  delete() { }

  openEdit(activityType: string, activityPeriod: number, activityEffortSpent: number, activityeffortUnit: number, activityStartDate: Date, activityEndDate: Date) {
    this.modal.open(EditActivity, {
      data: {
        activityType: activityType,
        activityPeriod: activityPeriod,
        activityEffortSpent: activityEffortSpent,
        activityeffortUnit: activityeffortUnit,
        activityStartDate: activityStartDate,
        activityEndDate: activityEndDate,
      }
    });
  }

  addActivity(){
    this.modal.open(AddActivity);
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

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
