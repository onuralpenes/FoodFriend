import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/helpers/alert.service';
import { ConfirmModalComponent } from 'src/app/helpers/confirmation-modal/confirmation-modal.component';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { AddFood } from './add-food/add-food.component';
import { EditFood } from './edit-table.component';

export interface EatTable {
  nutId: number;
  foodId: number;
  eatId: number;
  startDate: Date;
  endDate: Date;
  foodName: string;
  quantity: number;
}

export interface Group {
  title: string;
  isGroup: boolean;
  nutId: number;
}

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css'],
})
export class FoodTableComponent implements AfterViewInit {
  eatTable: (EatTable | Group)[] = [];
  sortedData = this.eatTable;
  isNull: boolean = true;

  constructor(private modal: MatDialog, authService: AuthService, private entityService: HttpEntityRepositoryService<EatingActivity>, private translate: TranslateService, private alertService: AlertService) {
    entityService.get('/EatingActivity/GetByUserId?userId=', authService.CurrentUserId).subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      for (let i = 0; i < Data.data.length; i++) {
        let group: Group = {
          title: "Eating Activity " + (i + 1).toString(),
          isGroup: true,
          nutId: 0
        }
        this.eatTable.push(group);

        let eId = Data.data[i].eatingActivityId;
        let time1 = Data.data[i].startEatingActivity;
        let time2 = Data.data[i].endEatingActivity;
        for (let j = 0; j < Data.data[i].nutritions.length; j++) {
          let newEat: EatTable = {
            nutId: Data.data[i].nutritions[j].nutritionId,
            foodId: Data.data[i].nutritions[j].foodDetailId,
            eatId: eId,
            startDate: time1,
            endDate: time2,
            foodName: Data.data[i].nutritions[j].foodName,
            quantity: Data.data[i].nutritions[j].quantity
          }
          this.eatTable.push(newEat);
        }
      }
      this.Begin();
    });
    setTimeout(() => {
      this.Begin();
    }, 300);
  }
  Begin() {

    if (this.dataSource.filteredData.length == 0) {
      this.isNull = false;
    }
    else {
      this.isNull = true;
    }
  }

  isGroup(index, item): boolean {
    return item.isGroup;
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

  delete(id: number, name: string) {
    this.modal.open(ConfirmModalComponent, {
      data: {
        title: 'Confirm Remove Nutrition',
        message: 'Are you sure, you want to remove a nutrition: ' + name
      }
    }).afterClosed().subscribe(result => {
      if (result === true) {
        this.eatTable = this.eatTable.filter(nut => nut.nutId != id);
        this.entityService.delete("/Nutrition?id=", id).subscribe(data => {
          this.alertService.openSnackBar(true, "success");
        }, err => {
          this.alertService.openSnackBar(false, "unsuccess");
        })
      }
    });

  }

  openEdit(id: number) {
    let editEat: EatTable | Group = this.eatTable.filter(eatId => eatId.nutId == id)[0]
    this.modal.open(EditFood, {
      data: editEat,
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

  ngAfterViewInit() {}
}