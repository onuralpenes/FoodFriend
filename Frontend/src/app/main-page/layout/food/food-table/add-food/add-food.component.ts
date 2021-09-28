import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-add-food',
    templateUrl: './add-food.component.html',
    styleUrls: ['./add-food.component.css'],
  })
  export class AddFood {
    // foods: Observable<FoodDetail>;

    //   constructor(entityService: HttpEntityRepositoryService<FoodDetail>){
    //     this.foods = entityService.getAll("/FoodDetail/GetAll")
    //   }
  }