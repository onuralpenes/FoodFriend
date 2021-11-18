import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { AlertService } from "src/app/helpers/alert.service";
import { CustomFoodService } from "src/app/helpers/custom-food.pipe";
import { EatingActivity } from "src/app/models/data/eating-activity.model";
import { FoodDetail } from "src/app/models/data/food-detail.model";
import { Nutrition } from "src/app/models/data/nutrition.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

export interface AddedFood {
  addedFoodName: string;
  addedFoodId: number;
  quantity: number;
}

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
  providers: [DatePipe]
})
export class AddFood {
  isEmpty: boolean = true;
  activeIndex: number = 0;
  foods: FoodDetail[] = [];
  addedFods: FoodDetail[] = [];
  addedFoods: AddedFood[] = [];
  newNutrition: Nutrition[] = [];
  addFoodForm!: FormGroup;
  addedFoodForm!: FormGroup;
  addEatingActivityForm!: FormGroup;
  cont: boolean = false;
  startDate!: Date;
  endDate!: Date;
  customFod = false;

  constructor(private formBuilder: FormBuilder, private entityService: HttpEntityRepositoryService<FoodDetail>, private alertService: AlertService, private authService: AuthService, private modal: MatDialog, private datePipe: DatePipe, private customFoodService: CustomFoodService) {
    entityService.getAll("/FoodDetail/GetAll").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      this.foods = Data.data;
    });
  }

  ngOnInit() {
    this.addedFoodForm = new FormGroup({
      formArray: this.formBuilder.array([])
    })
  }

  contArray: any;
  buildForm() {
    this.isEmpty = true;
    this.contArray = this.addedFoodForm.get('formArray') as FormArray;

    Object.keys(this.addedFoods).forEach((i) => {
      this.contArray.push(
        this.formBuilder.group({
          quantity: new FormControl({ value: 1 })
        })
      )
    })
  }

  customFood() {
    this.customFod = true;
    this.customFoodService.getCustomFoodInfo().subscribe(data => {
      this.addedFods.push(data);
    })
  }

  setDate() {
    if (this.startDate != null && this.endDate != null) {
      this.activeIndex = 1;
    }
  }

  onSubmit() {
    for (let i = 0; i < this.addedFoods.length; i++) {
      if (this.addedFoods[i].addedFoodId == 0) {
        let newNut: Nutrition = {
          nutritionId: 0,
          eatingActivityId: 0,
          foodDetailId: this.addedFoods[i].addedFoodId,
          foodName: "",
          quantity: this.addedFoodForm.value.formArray[i].quantity,
          customFoodName: this.addedFoods[i].addedFoodName,
          consumptionRatio: 0
        }
        this.newNutrition.push(newNut)
      }
      else {
        let newNut: Nutrition = {
          nutritionId: 0,
          eatingActivityId: 0,
          foodDetailId: this.addedFoods[i].addedFoodId,
          foodName: this.addedFoods[i].addedFoodName,
          quantity: this.addedFoodForm.value.formArray[i].quantity,
          customFoodName: "",
          consumptionRatio: 0
        }
        this.newNutrition.push(newNut);
      }
    }
    let d = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    let d1 = new Date( d + ' ' +  this.startDate + ":00");
    let d2 = new Date( d + ' ' +  this.endDate + ":00");
    let newEatAct: EatingActivity = {
      eatingActivityId: 0,
      userId: +this.authService.CurrentUserId,
      startEatingActivity: d1,
      endEatingActivity: d2,
      consumptionType: 0,
      estimatedCalorie: 0,
      nutritions: this.newNutrition
    }
    console.log(newEatAct);

    // this.entityService.insert("/EatingActivity/AddWithNutrition", JSON.stringify(newEatAct))
    //   .subscribe(data => {
    //     this.alertService.openSnackBar(true, "success");
    //   }, err => {
    //     this.alertService.openSnackBar(false, "error");
    //   });
  }
  public fod: any;
  addFood() {
    for (let i = 0; i < this.addedFods.length; i++) {
      this.fod = this.addedFods[i];
      let addFod: AddedFood = {
        addedFoodName: this.fod.foodName,
        addedFoodId: this.fod.foodDetailId,
        quantity: 1
      }
      this.addedFoods.push(addFod);
    }
    this.buildForm();
    this.activeIndex = 2;
  }
}