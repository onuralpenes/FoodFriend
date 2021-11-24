import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditService {

  constructor() { }

  private newFood = new BehaviorSubject<any>({
    nutId: 0,
    foodId: 0,
    eatId: 0,
    startDate: new Date(),
    endDate: new Date(),
    foodName: "",
    quantity: 0,
  });

  setFoodInfo(food: any) {
    this.newFood.next(food);
  }

  getFoodInfo() {
    return this.newFood.asObservable();
  }
}