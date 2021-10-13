import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { FoodDetail } from 'src/app/models/data/food-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { AddFood } from './add-food/add-food.component';
import { FOOD_DATA } from './data';
import { EditFood } from './edit-table.component';

export interface Transfer {
  foodName: string;
  calorie: number;
  protein: number;
  oil: number;
  carbohydrate: number;
}

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css'],
})
export class FoodTableComponent implements AfterViewInit {
  eatact: Observable<EatingActivity>;

  foods: FoodDetail[] = FOOD_DATA; //It is getting data from data.ts.
  sortedData = this.foods; //It is getting data from data.ts.
  isNull: boolean = true;

  constructor(public modal: MatDialog, entityService: HttpEntityRepositoryService<EatingActivity>, public translate: TranslateService) {
    this.eatact = entityService.getAll('​/EatingActivity​/GetAll');
  }

  displayedColumns: string[] = [
    'foodName',
    'calorie',
    'protein',
    'oil',
    'carbohydrate',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource(FOOD_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  delete() { }

  openEdit(
    foodName: string,
    calorie: number,
    protein: number,
    oil: number,
    carbohydrate: number,
  ) {
    this.modal.open(EditFood, {
      data: {
        foodName: foodName,
        calorie: calorie,
        protein: protein,
        oil: oil,
        carbohydrate: carbohydrate,
      },
    });
  }

  addFood() {
    this.modal.open(AddFood);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.filteredData.length == 0) {
      this.isNull = false;
    } else {
      this.isNull = true;
    }
  }

  ngAfterViewInit() {
    this.changeLang();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.changeLang();
    });
  }

  changeLang() {
    this.translate.get('paginator.item').subscribe((data: any) => {
      this.paginator._intl.itemsPerPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.next').subscribe((data: any) => {
      this.paginator._intl.nextPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.previous').subscribe((data: any) => {
      this.paginator._intl.previousPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.last').subscribe((data: any) => {
      this.paginator._intl.lastPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.first').subscribe((data: any) => {
      this.paginator._intl.firstPageLabel = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.translate.get('paginator.range').subscribe((data: any) => {
      var range = (page: number, pageSize: number, length: number) => {
        if (length == 0 || pageSize == 0) { return `0 ${data} ${length}`; }

        length = Math.max(length, 0);

        const startIndex = page * pageSize;
        const endIndex = startIndex < length ?
          Math.min(startIndex + pageSize, length) :
          startIndex + pageSize;
        if (data == "de") { return `${length} ${data}  ${startIndex + 1} - ${endIndex}`; }
        else { return `${startIndex + 1} - ${endIndex} ${data} ${length}`; }
      };
      this.paginator._intl.getRangeLabel = range;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
