import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/helpers/alert.service';
import { ConfirmModalComponent } from 'src/app/helpers/confirmation-modal/confirmation-modal.component';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { FoodDetail } from 'src/app/models/data/food-detail.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { AddFood } from './add-food/add-food.component';
import { EditFood } from './edit-table.component';

export interface Transfer {
  foodName: string;
  calorie: number;
  protein: number;
  oil: number;
  carbohydrate: number;
}

export interface EatTable {
  nutId: number;
  startDate: Date;
  endDate: Date;
  foodName: string;
  quantity: number;
}

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css'],
})
export class FoodTableComponent implements AfterViewInit {
  eatTable: EatTable[] = [];
  sortedData = this.eatTable;
  isNull: boolean = true;

  constructor(private modal: MatDialog, authService: AuthService, private entityService: HttpEntityRepositoryService<EatingActivity>, private entityService2: HttpEntityRepositoryService<FoodDetail>, private translate: TranslateService, private alertService: AlertService) {
    entityService.get('/EatingActivity/GetByUserId?userId=', authService.CurrentUserId).subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      for(let i = 0; i < Data.data.length ; i++){
        
        let time1 = Data.data[i].startEatingActivity;
        let time2 = Data.data[i].endEatingActivity;
        for(let j = 0 ; j < Data.data[i].nutritions.length ; j++){
          let foodId = Data.data[i].nutritions[j].foodDetailId;
          let foodName = "";
          entityService2.get('/FoodDetail/Get?id=', foodId).subscribe(foodDet =>{
            var food: any = foodDet;
            if (!food.success) {
              this.alertService.openSnackBar(food.success, food.message);
              return;
            }
            foodName = food.data.foodName;
            let newEat: EatTable = {
              nutId: Data.data[i].nutritions[j].nutritionId,
              startDate: time1,
              endDate: time2,
              foodName: foodName,
              quantity: Data.data[i].nutritions[j].quantity
            }
            this.eatTable.push(newEat);
          })
        }
      }
      this.Begin();
    });
  }
  Begin() {
    if (this.dataSource.filteredData.length == 0) {
      this.isNull = false;
    }
    else {
      this.isNull = true;
    }
  }
  displayedColumns: string[] = [
    'foodName',
    'quantity',
    'startDate',
    'endDate',
    'actions',
  ];
  dataSource = new MatTableDataSource(this.eatTable);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  delete(id: number ,name : string) { 
    const confirmModal = this.modal.open(ConfirmModalComponent, {
      data: {
        title: 'Confirm Remove Nutrition',
        message: 'Are you sure, you want to remove a nutrition: ' + name
      }
    }).afterClosed().subscribe(result => {
      if (result === true) {
        this.eatTable = this.eatTable.filter(nut => nut.nutId != id);
        this.entityService.delete("/Nutrition?id=", id).subscribe(data => {
          this.alertService.openSnackBar(true, "success");
        }, err =>{
          this.alertService.openSnackBar(false, "unsuccess");
        })
      } 
    });
    
  }

  openEdit() {
    this.modal.open(EditFood, {
      data: {},
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