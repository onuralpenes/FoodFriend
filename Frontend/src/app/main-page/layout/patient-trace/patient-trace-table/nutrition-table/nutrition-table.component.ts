import { AfterViewInit, Component, Inject, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Food } from "src/app/models/table/patient-food.model";
import { FOOD_DATA } from "../data";
import { Transfer } from "../patient-trace-table.component";

@Component({
    selector: 'app-nut-table',
    templateUrl: './nutrition-table.html',
    styleUrls: ['../patient-trace-table.component.css'],
})
export class NutritionTable implements AfterViewInit {
    foods: Food[] = FOOD_DATA;
    sortedData = this.foods;
    isNull: boolean = true;

    constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer) { }

    displayedColumns: string[] = [
        'meal',
        'foodCategory',
        'foodName',
        'calorie',
        'protein',
        'oil',
        'carbohydrate',
    ];
    dataSource = new MatTableDataSource(
        this.foods.filter((food) => food.id === this.data.id)
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