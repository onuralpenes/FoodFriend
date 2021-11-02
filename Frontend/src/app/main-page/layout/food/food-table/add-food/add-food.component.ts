import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/helpers/alert.service";
import { EatingActivity } from "src/app/models/data/eating-activity.model";
import { FoodDetail } from "src/app/models/data/food-detail.model";
import { Nutrition } from "src/app/models/data/nutrition.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFood {
  foods: FoodDetail[] = [];
  addedFoodsName: string[] = [];
  addedFoodsId: number[] = [];
  newNutrition: Nutrition[] = [];
  addFoodForm!: FormGroup;
  addEatingActivityForm!: FormGroup;
  cont: boolean = false;

  constructor(private formBuilder: FormBuilder, entityServiceF: HttpEntityRepositoryService<FoodDetail>, private alertService: AlertService, private authService: AuthService, private entityServiceE: HttpEntityRepositoryService<EatingActivity>) {
    entityServiceF.getAll("/FoodDetail/GetAll").subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.foods = Data.data;
    });
  }

  ngOnInit() {
    this.addFoodForm = this.formBuilder.group({
      foodName: new FormControl(''),
    });
    this.addEatingActivityForm = this.formBuilder.group({
      startEatingActivity: new FormControl('', [Validators.required]),
      endEatingActivity: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(check: string) {
    if (check == 'cont') {
      this.cont = true;
    }
    else if (check == 'submit') {
      for (let i = 0; i < this.addedFoodsId.length; i++) {
        let newNut: Nutrition = {
          nutritionId: 0,
          eatingActivityId: 0,
          foodDetailId: this.addedFoodsId[i],
          quantity: 1,
          customFoodName: "",
          consumptionRatio: 0
        }
        this.newNutrition.push(newNut);
      }
      let newEatAct: EatingActivity = {
        eatingActivityId: 0,
        userId: +this.authService.CurrentUserId,
        startEatingActivity: this.addEatingActivityForm.value.startEatingActivity,
        endEatingActivity: this.addEatingActivityForm.value.endEatingActivity,
        consumptionType: 0,
        estimatedCalorie: 0,
        nutritions: this.newNutrition
      }
      this.entityServiceE.insert("/EatingActivity/AddWithNutrition", JSON.stringify(newEatAct))
        .subscribe(data => {
          this.alertService.openSnackBar(true, "success");
        }, err => {
          this.alertService.openSnackBar(false, "error");
        });
    }
  }

  public fod: any;
  addFood() {
    if (this.addFoodForm.value.foodName != "") {
      this.fod = this.foods.filter((food) => food.foodName === this.addFoodForm.value.foodName)
      this.addedFoodsName.push(this.fod[0].foodName);
      this.addedFoodsId.push(this.fod[0].foodDetailId);
    }
  }
}