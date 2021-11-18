import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/helpers/alert.service';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';;
import { ConfirmationService } from 'primeng/api';
import { EditService } from 'src/app/helpers/edit.service';

export interface EatTable {
  nutId: number;
  foodId: number;
  eatId: number;
  startDate: Date;
  endDate: Date;
  foodName: string;
  quantity: number;
}
export interface Tab {
  tId: number;
  eatTab: EatTable[];
}
@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css'],
  providers: [ConfirmationService]
})
export class FoodTableComponent {
  eatTab: Tab[] = [];
  isNull: boolean = true;
  addFod: boolean = false;
  editFod: boolean = false;

  constructor(private editService: EditService, authService: AuthService, private entityService: HttpEntityRepositoryService<EatingActivity>, private alertService: AlertService, private confirmationService: ConfirmationService) {
    entityService.get('/EatingActivity/GetByUserId?userId=', authService.CurrentUserId).subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      for (let i = 0; i < Data.data.length; i++) {
        let eatTable: EatTable[] = [];

        let eId = Data.data[i].eatingActivityId;
        let time1 = Data.data[i].startEatingActivity;
        let time2 = Data.data[i].endEatingActivity;
        for (let j = 0; j < Data.data[i].nutritions.length; j++) {
          if (Data.data[i].nutritions[j].foodDetailId == 0) {
            let newEat: EatTable = {
              nutId: Data.data[i].nutritions[j].nutritionId,
              foodId: Data.data[i].nutritions[j].foodDetailId,
              eatId: eId,
              startDate: time1,
              endDate: time2,
              foodName: Data.data[i].nutritions[j].customFoodName,
              quantity: Data.data[i].nutritions[j].quantity
            }
            eatTable.push(newEat);
          }
          else {
            let newEat: EatTable = {
              nutId: Data.data[i].nutritions[j].nutritionId,
              foodId: Data.data[i].nutritions[j].foodDetailId,
              eatId: eId,
              startDate: time1,
              endDate: time2,
              foodName: Data.data[i].nutritions[j].foodName,
              quantity: Data.data[i].nutritions[j].quantity
            }
            eatTable.push(newEat);
          }
        }
        let newTab: Tab = {
          tId: i + 1,
          eatTab: eatTable
        }
        this.eatTab.push(newTab);
      }
    });
  }
  dataSource = new MatTableDataSource();

  openEdit(id: number) {
    let editEat: EatTable = {
      nutId: 0,
      foodId: 0,
      eatId: 0,
      startDate: new Date(),
      endDate: new Date(),
      foodName: '',
      quantity: 0
    };
    for(let i = 0 ; i < this.eatTab.length ; i++ ){
      for(let j = 0 ; j < this.eatTab[i].eatTab.length ; j++){
        if(this.eatTab[i].eatTab[j].nutId == id){
          editEat = this.eatTab[i].eatTab[j];
        }
      }
    }
    this.editService.setFoodInfo(editEat);
    this.editFod = true;
  }

  addFood() {
    this.addFod = true;
  }

  delete(id: number, name: string) {
    this.confirmationService.confirm({
      message: 'Are you sure, you want to remove a nutrition: ' + name,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.entityService.delete("/Nutrition?id=", id).subscribe(data => {
          this.alertService.openSnackBar(true, "success");
        })
      },
      reject: () => {
        this.alertService.openSnackBar(false, "unsuccess");
      }
    });
  }
}