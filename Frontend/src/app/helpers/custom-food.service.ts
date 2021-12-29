import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CustomFoodService {

    constructor() { }

    public newCustomFood = new BehaviorSubject<any>({
        foodName: "",
        weight: 0,
        calorie: 0,
        protein: 0,
        oil: 0,
        carbohydrate: 0,
        myProperty: ""
    });

    setCustomFoodInfo(food: any) {
        this.newCustomFood.next(food);
    }

    getCustomFoodInfo() {
        return this.newCustomFood.asObservable();
    }
}
