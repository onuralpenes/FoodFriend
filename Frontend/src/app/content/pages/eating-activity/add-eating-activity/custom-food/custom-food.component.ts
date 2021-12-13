import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CustomFoodService } from 'src/app/helpers/custom-food.service';

@Component({
  selector: 'app-custom-food',
  templateUrl: './custom-food.component.html',
  styleUrls: ['./custom-food.component.css'],
  providers: [MessageService]
})
export class CustomFoodComponent implements OnInit {

  customFoodForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private customFoodService: CustomFoodService, private messageService: MessageService) { }

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
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The meal has been successfully added.' });

    // this.entityService.insert("/FoodDetail/Add", JSON.stringify(this.customFood))
    //   .subscribe(data => {
    //     this.messageService.add({ severity: 'success', summary: 'Success', detail: '' });
    //   }, err => {
    //   this.messageService.add({ severity: 'error', summary: 'Error', detail: '' });
    //   });
  }
}
