import { AfterViewInit, Component, Inject, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Activity } from "src/app/models/table/patient-activity.model";
import { ACTIVITY_DATA } from "../data";
import { Transfer } from "../patient-trace-table.component";

@Component({
    selector: 'app-act-table',
    templateUrl: './activity-table.html',
    styleUrls: ['../patient-trace-table.component.css'],
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