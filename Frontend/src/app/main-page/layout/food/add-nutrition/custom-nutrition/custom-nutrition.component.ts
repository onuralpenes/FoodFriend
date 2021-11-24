import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/helpers/alert.service';
import { CustomNutritionService } from 'src/app/helpers/custom-nutrition.service';


@Component({
  selector: 'app-custom-nutrition',
  templateUrl: './custom-nutrition.component.html',
  styleUrls: ['./custom-nutrition.component.css']
})
export class CustomNutritionComponent implements OnInit {

  customFoodForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,  private alertService: AlertService, private customFoodService: CustomNutritionService) { }

  ngOnInit() {
    this.customFoodForm = this.formBuilder.group({
      'foodName': new FormControl('', [Validators.required]),
      'weight': new FormControl('', [Validators.required]),
      'calorie': new FormControl('', [Validators.required]),
      'protein': new FormControl('', [Validators.required]),
      'oil': new FormControl('', [Validators.required]),
      'carbohydrate': new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    let customFood = {
      foodDetailId: 0,
      foodName: this.customFoodForm.value.foodName,
      weight: this.customFoodForm.value.weight,
      calorie: this.customFoodForm.value.calorie,
      protein: this.customFoodForm.value.protein,
      oil: this.customFoodForm.value.oil,
      carbohydrate: this.customFoodForm.value.carbohydrate,
      myProperty: ""
    }
    this.customFoodService.setCustomFoodInfo(customFood);
    this.alertService.openSnackBar(true, "Added");

    // this.entityService.insert("/FoodDetail/Add", JSON.stringify(this.customFood))
    //   .subscribe(data => {
    //     this.alertService.openSnackBar(true, "success");
    //     this.modalRef.close(`${this.customFoodForm.value.foodName}`);
    //   }, err => {
    //     this.alertService.openSnackBar(false, "error");
    //   });
  }
}
