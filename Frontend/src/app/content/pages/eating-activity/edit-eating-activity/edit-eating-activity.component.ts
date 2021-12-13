import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";
import { EditEatingActivityService } from "src/app/helpers/edit-eating-activity.service";
import { EatingActivity } from "src/app/models/data/eating-activity.model";
import { FoodDetail } from "src/app/models/data/food-detail.model";
import { Nutrition } from "src/app/models/data/nutrition.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-edit-eating-activity',
  templateUrl: './edit-eating-activity.component.html',
  styleUrls: ['./edit-eating-activity.component.css'],
  providers: [MessageService]
})
export class EditEatingActivity {
  editFoodForm!: FormGroup;
  foods: FoodDetail[] = [];
  post: any = '';
  editEat: any;

  constructor(private authService: AuthService, editNutritionService: EditEatingActivityService, private formBuilder: FormBuilder, private entityService1: HttpEntityRepositoryService<Nutrition>, private entityService2: HttpEntityRepositoryService<EatingActivity>, private messageService: MessageService) {
    editNutritionService.getFoodInfo().subscribe(data => {
      this.editEat = data;
      this.editFoodForm = this.formBuilder.group({
        'foodName': new FormControl(this.editEat.foodName),
        'quantity': new FormControl(this.editEat.quantity),
        'startDate': new FormControl(this.editEat.startDate),
        'endDate': new FormControl(this.editEat.endDate),
      });
    })
    entityService1.getAll("/FoodDetail/GetAll").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      this.foods = Data.data;
    });
  }

  onSubmit() {
    if (this.editFoodForm.value.foodName != null || this.editFoodForm.value.quantity != null) {
      let foodName;
      let foodId;
      let quantity;
      if (this.editFoodForm.value.foodName != null) {
        foodName = this.editFoodForm.value.foodName;
        foodId = this.foods.filter(food => food.foodName == this.editFoodForm.value.foodName)[0].foodDetailId;
      }
      else {
        foodName = this.editEat.foodName;
        foodId = this.editEat.foodId;
      }
      if (this.editFoodForm.value.quantity) {
        quantity = this.editFoodForm.value.quantity;
      }
      else {
        quantity = this.editEat.quantity;
      }
      let editedNut: Nutrition = {
        nutritionId: this.editEat.nutId,
        eatingActivityId: this.editEat.eatId,
        foodDetailId: foodId,
        foodName: foodName,
        quantity: quantity,
        customFoodName: "",
        consumptionRatio: 0
      }

      this.entityService1.update("/Nutritions/Update", editedNut).subscribe(data => {
        var Data: any = data;
        if (!Data.success) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Nutrition could not be updated.' });
          return;
        }
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Nutrition has been updated.' });
      });
    }
    if (this.editFoodForm.value.startDate != null || this.editFoodForm.value.endDate != null) {
      let sDate;
      let eDate;
      if (this.editFoodForm.value.startDate != null) {
        sDate = this.editFoodForm.value.startDate;
      }
      else {
        sDate = this.editEat.startDate;
      }
      if (this.editFoodForm.value.endDate != null) {
        eDate = this.editFoodForm.value.endDate;
      }
      else {
        eDate = this.editEat.endDate;
      }
      let editedAct = {
        eatingActivityId: this.editEat.eatId,
        userId: this.authService.CurrentUserId,
        startEatingActivity: sDate,
        endEatingActivity: eDate,
        consumptionType: 0,
        estimatedCalorie: 0,
      }
      this.entityService2.update("/EatingActivity/Update", editedAct).subscribe(data => {
        var Data: any = data;
        if (!Data.success) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Nutrition could not be updated.' });
          return;
        }
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Nutrition has been updated.' });
      });
    }
  }
}