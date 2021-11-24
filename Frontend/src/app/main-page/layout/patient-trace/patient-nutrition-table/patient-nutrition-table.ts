import { Component  } from "@angular/core";
// import { MAT_DIALOG_DATA } from "@angular/material/dialog";
// import { MatTableDataSource } from "@angular/material/table";
// import { FoodDetail } from "src/app/models/data/food-detail.model";
// import { Transfer } from "../patient-trace-table.component";

@Component({
    selector: 'app-patient-nutrition-table',
    templateUrl: './patient-nutrition-table.html',
    styleUrls: ['./patient-nutrition-table.css'],
})
export class PatientNutritionTable {
//     foods: FoodDetail[] = [];
//     sortedData = this.foods;

//     constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer) { }

//     displayedColumns: string[] = [
//         'foodName',
//         'calorie',
//         'protein',
//         'oil',
//         'carbohydrate',
//     ];
//     dataSource = new MatTableDataSource(
//         this.foods.filter((food) => food.foodDetailId === this.data.id)
//     );

//     applyFilter(event: Event) {
//         const filterValue = (event.target as HTMLInputElement).value;
//         this.dataSource.filter = filterValue.trim().toLowerCase();
//     }
}