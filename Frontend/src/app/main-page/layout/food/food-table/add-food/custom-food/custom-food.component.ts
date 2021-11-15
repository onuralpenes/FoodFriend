import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/helpers/alert.service';
import { FoodDetail } from 'src/app/models/data/food-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';


@Component({
  selector: 'app-custom-food',
  templateUrl: './custom-food.component.html',
  styleUrls: ['./custom-food.component.css']
})
export class CustomFoodComponent implements OnInit {

  customFoodForm!: FormGroup;
  post: any = '';
  customFood!: FoodDetail;

  constructor(private formBuilder: FormBuilder, private entityService: HttpEntityRepositoryService<FoodDetail>, private alertService: AlertService) { }

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
    this.customFood = {
      foodDetailId: 0,
      foodName: this.customFoodForm.value.foodName,
      weight: this.customFoodForm.value.weight,
      calorie: this.customFoodForm.value.calorie,
      protein: this.customFoodForm.value.protein,
      oil: this.customFoodForm.value.oil,
      carbohydrate: this.customFoodForm.value.carbohydrate,
      myProperty: ""
    }

    this.entityService.insert("/FoodDetail/Add", JSON.stringify(this.customFood))
      .subscribe(data => {
        this.alertService.openSnackBar(true, "success");
      }, err => {
        this.alertService.openSnackBar(false, "error");
      });
  }
}