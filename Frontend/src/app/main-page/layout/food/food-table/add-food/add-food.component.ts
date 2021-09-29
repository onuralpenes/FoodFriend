import { Component } from "@angular/core";
import { AlertService } from "src/app/helpers/alert.service";
import { FoodDetail } from "src/app/models/data/food-detail.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFood {
  foods: FoodDetail[] = [];

  constructor(entityService: HttpEntityRepositoryService<FoodDetail>, private alertService: AlertService) {
    entityService.getAll("/FoodDetail/GetAll").subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.foods = Data.data;
    });
  }

  addFood(id: number){

  }
}