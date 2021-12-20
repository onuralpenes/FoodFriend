import { Component } from '@angular/core';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { ConfirmationService } from 'primeng/api';
import { EditEatingActivityService } from 'src/app/helpers/edit-eating-activity.service';
import { MessageService } from 'primeng/api';

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
  tabId: number;
  eatTab: EatTable[];
}
@Component({
  selector: 'app-eating-activity',
  templateUrl: './eating-activity.component.html',
  styleUrls: ['./eating-activity.component.css'],
  providers: [ConfirmationService]
})
export class EatingActivityComponent {
  eatTab: Tab[] = [];
  addFod: boolean = false;
  editFod: boolean = false;
  loaded = false;

  constructor(private editNutritionService: EditEatingActivityService, authService: AuthService, private entityService: HttpEntityRepositoryService<EatingActivity>, private messageService: MessageService, private confirmationService: ConfirmationService) {
    entityService.get('/EatingActivity/GetByUserId?userId=', authService.CurrentUserId).subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
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
          tabId: i + 1,
          eatTab: eatTable
        }
        this.eatTab.push(newTab);
      }
      this.loaded = true;
    });
  }

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
    for (let i = 0; i < this.eatTab.length; i++) {
      for (let j = 0; j < this.eatTab[i].eatTab.length; j++) {
        if (this.eatTab[i].eatTab[j].nutId == id) {
          editEat = this.eatTab[i].eatTab[j];
        }
      }
    }
    this.editNutritionService.setFoodInfo(editEat);
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
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The nutrition was deleted successfully.' });
        }, err => {
          if (err)
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the deletion process.' });
        })
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'The nutrition was not deleted.' });
      }
    });
  }
}