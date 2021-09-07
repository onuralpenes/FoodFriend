import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Transfer } from "./food-table.component";

@Component({
    selector: 'app-edit-food',
    templateUrl: './edit-food.html',
    styleUrls: ['./food-table.component.css'],
  })
  export class EditFood {
    editForm!: FormGroup;
    post: any = '';
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer, private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.editForm = this.formBuilder.group({
        'meal': new FormControl(''),
        'foodCategory': new FormControl(''),
        'foodName': new FormControl(''),
        'calorie': new FormControl(''),
        'protein': new FormControl(''),
        'oil': new FormControl(''),
        'carbohydrate': new FormControl(''),
      });
    }
  
    onSubmit(post) {
      this.post = post;
    }
  }