import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ACTIVITY_DATA, Activity } from './data';

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
  activities: Activity[] = ACTIVITY_DATA; //It is getting data from data.ts.
  sortedData = this.activities; //It is getting data from data.ts.

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
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.html',
  styleUrls: ['./activity-table.component.css'],
})
export class EditActivity {

  editForm!: FormGroup;
  post: any = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      'activityType': [null],
      'activityPeriod': [null],
      'activityEffortSpent': [null],
      'activityeffortUnit': [null],
      'activityStartDate': [null],
      'activityEndDate': [null],
    });
  }

  onSubmit(post) {
    this.post = post;
  }
}
