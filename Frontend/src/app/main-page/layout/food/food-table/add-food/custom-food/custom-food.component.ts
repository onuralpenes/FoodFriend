import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-custom-food',
  templateUrl: './custom-food.component.html',
  styleUrls: ['./custom-food.component.css']
})
export class CustomFoodComponent implements OnInit {

  customFoodForm!: FormGroup;
  post: any = '';

  constructor(private formBuilder: FormBuilder) { }
  
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
  
  onSubmit(post) {
    this.post = post;
  }
}
