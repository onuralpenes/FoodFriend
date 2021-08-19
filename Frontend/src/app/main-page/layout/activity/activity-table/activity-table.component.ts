import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ACTIVITY_DATA, Activity } from './data';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css']
})
export class ActivityTableComponent implements AfterViewInit {

  activities: Activity[] = ACTIVITY_DATA; //It is getting data from data.ts.
  sortedData = this.activities; //It is getting data from data.ts.

  constructor() { }

  displayedColumns: string[] = ['activityType', 'activityPeriod', 'activityEffortSpent', 'activityEfforUnit', 'activityStartDate', 'activityEndDate', 'edit', 'delete'];
  dataSource = new MatTableDataSource(ACTIVITY_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  delete(){ }

  edit(){ }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
