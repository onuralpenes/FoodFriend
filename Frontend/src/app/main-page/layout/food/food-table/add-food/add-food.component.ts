import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AlertService } from "src/app/helpers/alert.service";
import { EatingActivity } from "src/app/models/data/eating-activity.model";
import { FoodDetail } from "src/app/models/data/food-detail.model";
import { Nutrition } from "src/app/models/data/nutrition.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";
import { CustomFoodComponent } from "./custom-food/custom-food.component";

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
  foods: FoodDetail[] = [];
  addedFoods: AddedFood[] = [];
  newNutrition: Nutrition[] = [];
  addFoodForm!: FormGroup;
  addedFoodForm!: FormGroup;
  addEatingActivityForm!: FormGroup;
  cont: boolean = false;
  customRef!: MatDialogRef<CustomFoodComponent>;

  constructor(private formBuilder: FormBuilder, private entityService: HttpEntityRepositoryService<FoodDetail>, private alertService: AlertService, private authService: AuthService, private modal: MatDialog, private datePipe: DatePipe) {
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
    this.addFoodForm = this.formBuilder.group({
      foodName: new FormControl(''),
    });
    this.addEatingActivityForm = this.formBuilder.group({
      startEatingActivity: new FormControl('', [Validators.required]),
      endEatingActivity: new FormControl('', [Validators.required]),
    })
    this.addedFoodForm = new FormGroup({
      formArray: this.formBuilder.array([])
    })
  }

  contArray: any;
  buildForm(){
    this.isEmpty = false;
    this.contArray = this.addedFoodForm.get('formArray') as FormArray;

    Object.keys(this.addedFoods).forEach((i) =>{
      this.contArray.push(
        this.formBuilder.group({
          quantity: new FormControl({ value: 1})
        })
      )
    })
  }

  customFood() {
    this.customRef = this.modal.open(CustomFoodComponent)
    this.customRef.afterClosed().subscribe(name => {
      let addFod: AddedFood ={
        addedFoodName: name.toString(),
        addedFoodId: 0,
        quantity: this.addFoodForm.value.quantity
      }
      this.addedFoods.push(addFod);
      this.buildForm();
    })
  }

  onSubmit(check: string) {
    if (check == 'cont') {
      this.cont = true;
    }
    else if (check == 'submit') {
      for (let i = 0; i < this.addedFoods.length; i++) {
        if(this.addedFoods[i].addedFoodId == 0){
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
        else{
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
      let d1 = new Date( d + ' ' +  this.addEatingActivityForm.value.startEatingActivity + ":00");
      let d2 = new Date( d + ' ' +  this.addEatingActivityForm.value.endEatingActivity + ":00");
      
      let newEatAct: EatingActivity = {
        eatingActivityId: 0,
        userId: +this.authService.CurrentUserId,
        startEatingActivity: d1,
        endEatingActivity: d2,
        consumptionType: 0,
        estimatedCalorie: 0,
        nutritions: this.newNutrition
      }
      
      this.entityService.insert("/EatingActivity/AddWithNutrition", JSON.stringify(newEatAct))
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
      let addFod: AddedFood ={
        addedFoodName: this.fod[0].foodName,
        addedFoodId: this.fod[0].foodDetailId,
        quantity: this.addFoodForm.value.quantity
      }
      this.addedFoods.push(addFod);
    }
    this.buildForm();
  }
}