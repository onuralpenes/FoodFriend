import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { PickList } from "primeng/picklist";
import { CustomFoodService } from "src/app/helpers/custom-food.service";
import { EatingActivity } from "src/app/models/data/eating-activity.model";
import { FoodDetail } from "src/app/models/data/food-detail.model";
import { Nutrition } from "src/app/models/data/nutrition.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";
import { MessageService } from 'primeng/api';

export interface AddedFood {
  addedFoodName: string;
  addedFoodId: number;
  quantity: number;
}

@Component({
  selector: 'app-add-eating-activity',
  templateUrl: './add-eating-activity.component.html',
  styleUrls: ['./add-eating-activity.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEatingActivity {
  activeIndex: number = 0;
  foodsList: FoodDetail[] = [];
  addedFoodsFromTable: FoodDetail[] = [];
  addedFoods: AddedFood[] = [];
  newNutrition: Nutrition[] = [];
  addFoodForm!: FormGroup;
  addedFoodForm!: FormGroup;
  addEatingActivityForm!: FormGroup;
  startDate!: Date;
  endDate!: Date;
  customFoodModal = false;
  @ViewChild('pl') pl: PickList | undefined;
  constructor(private formBuilder: FormBuilder, private entityService: HttpEntityRepositoryService<FoodDetail>, private authService: AuthService, private customFoodService: CustomFoodService, private detect: ChangeDetectorRef, private messageService: MessageService) { }

  getFoods() {

    this.entityService.getAll("/FoodDetail/GetAll").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      this.foodsList = Data.data;
    });
  }

  ngOnInit() {
    this.addedFoodForm = new FormGroup({
      formArray: this.formBuilder.array([])
    })

    this.getFoods();

    this.customFoodService.newCustomFood.subscribe(data => {
      if (data.foodName != "") {
        this.addedFoodsFromTable.push(data);
        this.detect.detectChanges();
      }
    })
  }

  buildForm() {
    let buildArray = this.addedFoodForm.get('formArray') as FormArray;

    Object.keys(this.addedFoods).forEach((i) => {
      buildArray.push(
        this.formBuilder.group({
          quantity: new FormControl(1)
        })
      )
    })
  }

  getTargets() {
    return this.addedFoodsFromTable;
  }

  customFood() {
    this.customFoodModal = true;
  }

  setDate() {
    if (this.startDate != null && this.endDate != null) {
      this.activeIndex = 1;
    }
  }
  nullForm: any[] = [];

  destroyArray() {
    this.activeIndex = 1
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
        let tempNutrition: Nutrition = {
          nutritionId: 0,
          eatingActivityId: 0,
          foodDetailId: this.addedFoods[i].addedFoodId,
          foodName: this.addedFoods[i].addedFoodName,
          quantity: this.addedFoodForm.value.formArray[i].quantity,
          customFoodName: "",
          consumptionRatio: 0
        }
        this.newNutrition.push(tempNutrition);
      }
    }

    let newEatAct: EatingActivity = {
      eatingActivityId: 0,
      userId: +this.authService.CurrentUserId,
      startEatingActivity: this.startDate,
      endEatingActivity: this.endDate,
      consumptionType: 0,
      estimatedCalorie: 0,
      nutritions: this.newNutrition
    }
    this.entityService.insert("/EatingActivity/AddWithNutrition", JSON.stringify(newEatAct))
      .subscribe(data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The eating activity has been successfully added.' });
      }, err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the insertion process.' });
      });
  }

  public tempFood: any;
  addFoodFunction() {
    if (this.addedFoodsFromTable.length != 0) {
      this.addedFoods = [];
      for (let i = 0; i < this.addedFoodsFromTable.length; i++) {
        this.tempFood = this.addedFoodsFromTable[i];
        let addFood: AddedFood = {
          addedFoodName: this.tempFood.foodName,
          addedFoodId: this.tempFood.foodDetailId,
          quantity: 1
        }
        this.addedFoods.push(addFood);
      }
      this.buildForm();
      this.activeIndex = 2;
    }
  }
}