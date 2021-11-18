import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AlertService } from "src/app/helpers/alert.service";
import { EditService } from "src/app/helpers/edit.service";
import { EatingActivity } from "src/app/models/data/eating-activity.model";
import { FoodDetail } from "src/app/models/data/food-detail.model";
import { Nutrition } from "src/app/models/data/nutrition.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-edit-food',
    templateUrl: './edit-food.html',
    styleUrls: ['../food-table.component.css'],
  })
  export class EditFood {
    editForm!: FormGroup;
    foods: FoodDetail[] = [];
    post: any = '';
    editEat: any;
  
    constructor( private authService: AuthService, private editService: EditService, private formBuilder: FormBuilder, private entityService1: HttpEntityRepositoryService<Nutrition>, private entityService2: HttpEntityRepositoryService<EatingActivity>, private alertService: AlertService) {
      editService.getFoodInfo().subscribe(data => {
        this.editEat = data;
      })
      entityService1.getAll("/FoodDetail/GetAll").subscribe(data => {

        var Data: any = data;
        if (!Data.success) {
          this.alertService.openSnackBar(Data.success, Data.message);
          return;
        }
  
        this.foods = Data.data;
      });
     }
  
    ngOnInit() {
      this.editForm = this.formBuilder.group({
        'foodName': new FormControl(''),
        'quantity': new FormControl(''),
        'startDate': new FormControl(''),
        'endDate': new FormControl(''),
      });
    }
  
    onSubmit() {
      if(this.editForm.value.foodName != null || this.editForm.value.quantity != null){
        let foodName;
        let foodId;
        let quantity;
        if (this.editForm.value.foodName != null){
          foodName = this.editForm.value.foodName;
          foodId = this.foods.filter(food => food.foodName == this.editForm.value.foodName)[0].foodDetailId;
        }
        else{
          foodName = this.editEat.foodName;
          foodId = this.editEat.foodId;
        }
        if(this.editForm.value.quantity){
          quantity = this.editForm.value.quantity;
        }
        else{
          quantity = this.editEat.quantity;
        }
        let editedNut: Nutrition = {
          nutritionId: this.editEat.nutId,
          eatingActivityId: this.editEat.eatId,
          foodDetailId: foodId,
          foodName: foodName,
          quantity: quantity,
          customFoodName: "",
          consumptionRatio: 0
        }
        
        this.entityService1.update("/Nutritions/Update", editedNut);
      }
      if(this.editForm.value.startDate != null || this.editForm.value.endDate != null){
        let sDate;
        let eDate;
        if(this.editForm.value.startDate != null ){
          sDate = this.editForm.value.startDate;
        }
        else{
            sDate = this.editEat.startDate;
        }
        if(this.editForm.value.endDate!= null){
          eDate = this.editForm.value.endDate;
        }
        else{
            eDate = this.editEat.endDate;
        }
        let editedAct ={
          eatingActivityId: this.editEat.eatId,
          userId: this.authService.CurrentUserId,
          startEatingActivity: sDate,
          endEatingActivity: eDate,
          consumptionType: 0,
          estimatedCalorie: 0,
        }
        this.entityService2.update("/EatingActivity/Update", editedAct);
      }
    }
  }