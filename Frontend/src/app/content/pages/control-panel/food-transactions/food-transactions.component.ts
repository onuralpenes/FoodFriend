import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FoodDetail } from 'src/app/models/data/food-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-food-transactions',
    templateUrl: './food-transactions.component.html',
    styleUrls: ['../control-panel.component.css']
})
export class FoodTransactionsComponent {
    foodList: FoodDetail[] = [];
    food!: FoodDetail;
    foodForm!: FormGroup;
    foodBool: boolean = false;
    loaded = false;
    first = 0;
    rows = 7;
    state: string = "";
    constructor(private entityService: HttpEntityRepositoryService<FoodDetail>, private messageService: MessageService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder,) {
        this.entityService.getAll("/FoodDetail/GetAll").subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.foodList = Data.data;
            this.loaded = true;
        })
        this.foodForm = this.formBuilder.group({
            'foodName': new FormControl('', [Validators.required]),
            'weight': new FormControl('', [Validators.required]),
            'calorie': new FormControl('', [Validators.required]),
            'protein': new FormControl('', [Validators.required]),
            'oil': new FormControl('', [Validators.required]),
            'carbohydrate': new FormControl('', [Validators.required]),
        });
    }

    add() {
        this.foodForm.reset();
        this.foodForm = this.formBuilder.group({
            'foodName': new FormControl('', [Validators.required]),
            'weight': new FormControl('', [Validators.required]),
            'calorie': new FormControl('', [Validators.required]),
            'protein': new FormControl('', [Validators.required]),
            'oil': new FormControl('', [Validators.required]),
            'carbohydrate': new FormControl('', [Validators.required]),
        });
        this.state = "Add"
        this.foodBool = true;
    }

    update(food: FoodDetail) {
        this.food = food;
        this.foodForm.reset();
        this.foodForm = this.formBuilder.group({
            'foodName': new FormControl(food.foodName, [Validators.required]),
            'weight': new FormControl(food.weight, [Validators.required]),
            'calorie': new FormControl(food.calorie, [Validators.required]),
            'protein': new FormControl(food.protein, [Validators.required]),
            'oil': new FormControl(food.oil, [Validators.required]),
            'carbohydrate': new FormControl(food.carbohydrate, [Validators.required]),
        });
        this.state = "Edit"
        this.foodBool = true;
    }

    delete(id: number, name: string) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete food: ' + name,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.entityService.delete("/FoodDetail?id=", id).subscribe(
                    (data) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'The food was deleted successfully.',
                        });
                    },
                    (err) => {
                        if (err)
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Error',
                                detail: 'An error occurred during the deletion process.',
                            });
                    }
                );
            },
            reject: () => {
                this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the food.' });
            }
        });
    }
    onSubmit() {
        if (this.state == "Edit" && this.foodForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to update food: ' + this.food.foodName,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let foodName;
                    let weight;
                    let calorie;
                    let protein;
                    let oil;
                    let carbohydrate;
                    if (this.foodForm.value.foodName != this.food.foodName) {
                        foodName = this.foodForm.value.foodName;
                    }
                    else {
                        foodName = this.food.foodName;
                    }
                    if (this.foodForm.value.weight != this.food.weight) {
                        weight = this.foodForm.value.weight;
                    }
                    else {
                        weight = this.food.weight;
                    }
                    if (this.foodForm.value.calorie != this.food.calorie) {
                        calorie = this.foodForm.value.calorie;
                    }
                    else {
                        calorie = this.food.calorie;
                    }
                    if (this.foodForm.value.protein != this.food.protein) {
                        protein = this.foodForm.value.protein;
                    }
                    else {
                        protein = this.food.protein;
                    }
                    if (this.foodForm.value.oil != this.food.oil) {
                        oil = this.foodForm.value.oil;
                    }
                    else {
                        oil = this.food.oil;
                    }
                    if (this.foodForm.value.carbohydrate != this.food.carbohydrate) {
                        carbohydrate = this.foodForm.value.carbohydrate;
                    }
                    else {
                        carbohydrate = this.food.carbohydrate;
                    }
                    let updatedFood = {
                        foodDetailId: this.food.foodDetailId,
                        foodName: foodName,
                        weight: weight,
                        calorie: calorie,
                        protein: protein,
                        oil: oil,
                        carbohydrate: carbohydrate,
                        myProperty: ""
                    }
                    this.entityService.insert("/FoodDetail/Update", JSON.stringify(updatedFood))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The food has been successfully updated.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the update.' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not update the food.' });
                }
            });
        }
        else if (this.state == "Add" && this.foodForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to add food: ' + this.foodForm.value.foodName,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let addFood = {
                        foodDetailId: 0,
                        foodName: this.foodForm.value.foodName,
                        weight: this.foodForm.value.weight,
                        calorie: this.foodForm.value.calorie,
                        protein: this.foodForm.value.protein,
                        oil: this.foodForm.value.oil,
                        carbohydrate: this.foodForm.value.carbohydrate,
                        myProperty: ""
                    }
                    this.entityService.insert("/FoodDetail/Add", JSON.stringify(addFood))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The food has been successfully added.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the creation process. ' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the food.' });
                }
            });
        }
    }
}