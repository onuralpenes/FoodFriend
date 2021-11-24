 import { AfterViewInit, Component, Inject, ViewChild } from "@angular/core";
// import { MAT_DIALOG_DATA } from "@angular/material/dialog";
// import { MatSort } from "@angular/material/sort";
// import { MatTableDataSource } from "@angular/material/table";
// import { PersonalEnergyActivity } from "src/app/models/data/energy-activity.model";;
// import { Transfer } from "../patient-trace-table.component";

@Component({
    selector: 'app-act-table',
    templateUrl: './activity-table.html',
//     styleUrls: ['../patient-trace-table.component.css'],
})
export class ActivityTable implements AfterViewInit {
//     activities: PersonalEnergyActivity[] = [];
//     sortedData = this.activities;

//     constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer) { }

//     displayedColumns: string[] = [
//         'activityType',
//         'activityPeriod',
//         'activityEffortSpent',
//         'activityeffortUnit',
//         'activityStartDate',
//         'activityEndDate',
//         'actions'
//     ];
//     dataSource = new MatTableDataSource(
//         this.activities.filter((activity) => activity.userId === this.data.id)
//     );

//     @ViewChild(MatSort) sort!: MatSort;

//     applyFilter(event: Event) {
//         const filterValue = (event.target as HTMLInputElement).value;
//         this.dataSource.filter = filterValue.trim().toLowerCase();
//     }

    ngAfterViewInit() {
//         this.dataSource.sort = this.sort;
     }
 }