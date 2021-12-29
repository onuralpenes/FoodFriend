import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditEatingActivityService {

  constructor() { }

  private newNutrition = new BehaviorSubject<any>({
    nutId: 0,
    foodId: 0,
    eatId: 0,
    startDate: new Date(),
    endDate: new Date(),
    foodName: "",
    quantity: 0,
  });

  setFoodInfo(nutrition: any) {
    this.newNutrition.next(nutrition);
  }

  getFoodInfo() {
    return this.newNutrition.asObservable();
  }
}
