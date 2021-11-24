 import { Component } from "@angular/core";
// import { MAT_DIALOG_DATA } from "@angular/material/dialog";
// import { MatSort } from "@angular/material/sort";
// import { MatTableDataSource } from "@angular/material/table";
// import { PersonalEnergyActivity } from "src/app/models/data/energy-activity.model";;
// import { Transfer } from "../patient-trace-table.component";

@Component({
    selector: 'app-patient-activity-table',
    templateUrl: './patient-activity-table.html',
   styleUrls: ['../patient-trace.component.css'],
})
export class PatientActivityTable {
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
 }