import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { FoodDetailDto } from "src/app/models/data/nutrition/food-detail-dto.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-add-food',
    templateUrl: './add-food.component.html',
    styleUrls: ['../food-table.component.css'],
  })
  export class AddFood {
    foods: Observable<FoodDetailDto>;

      constructor(private entityService: HttpEntityRepositoryService<FoodDetailDto>){
        this.foods = entityService.getAll("/FoodDetail/GetAll")
        console.log(this.foods);
      }
  }