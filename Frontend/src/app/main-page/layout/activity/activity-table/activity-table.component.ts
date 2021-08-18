import { AfterViewInit,Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ACTIVITY_DATA, Activity } from './data';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css']
})
export class ActivityTableComponent implements AfterViewInit {

  activities: Activity[] = ACTIVITY_DATA;
  sortedData = this.activities;

  constructor() { }

  displayedColumns: string[] = ['activityType', 'activityPeriod', 'activityEffortSpent', 'activityEfforUnit', 'activityStartDate', 'activityEndDate'];
  dataSource = new MatTableDataSource(ACTIVITY_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
}
