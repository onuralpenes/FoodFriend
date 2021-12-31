import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GoalType } from 'src/app/models/data/goal.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-goal-type-transactions',
    templateUrl: './goal-type-transactions.component.html',
    styleUrls: ['../control-panel.component.css']
})
export class GoalTypeTransactionsComponent {
    goalList: GoalType[] = [];
    goal!: GoalType;
    goalForm!: FormGroup;
    goalBool: boolean = false;
    loaded = false;
    first = 0;
    rows = 7;
    state: string = "";

    constructor(private entityService: HttpEntityRepositoryService<GoalType>, private messageService: MessageService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder) {
        this.entityService.getAll("/api/GoalType/GetAll").subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.goalList = Data.data;
            this.loaded = true;
        })
        this.goalForm = this.formBuilder.group({
            'name': new FormControl('', [Validators.required]),
            'measurement': new FormControl('', [Validators.required])
        });
    }
    add() {
        this.goalForm.reset();
        this.goalForm = this.formBuilder.group({
            'name': new FormControl('', [Validators.required]),
            'measurement': new FormControl('', [Validators.required]),
        });
        this.state = "Add"
        this.goalBool = true;
    }

    update(goal: GoalType) {
        this.goal = goal;
        this.goalForm.reset();
        this.goalForm = this.formBuilder.group({
            'name': new FormControl(goal.name, [Validators.required]),
            'measurement': new FormControl(goal.measurement, [Validators.required])
        });
        this.state = "Edit"
        this.goalBool = true;
    }

    delete(id: number, name: string) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete goal: ' + name,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.entityService.delete("/api/GoalType?id=", id).subscribe(
                    (data) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'The goal was deleted successfully.',
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
                this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the goal.' });
            }
        });
    }
    onSubmit() {
        if (this.state == "Edit" && this.goalForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to update goal: ' + this.goalForm.value.name,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let name;
                    let measurement;
                    if (this.goalForm.value.name != this.goal.name) {
                        name = this.goalForm.value.name;
                    }
                    else {
                        name = this.goal.name;
                    }
                    if (this.goalForm.value.measurement != this.goal.measurement) {
                        measurement = this.goalForm.value.measurement;
                    }
                    else {
                        measurement = this.goal.measurement;
                    }
                    let updatedGoal = {
                        goalTypeId: this.goal.goalTypeId,
                        name: name,
                        measurement: measurement,
                    }
                    this.entityService.insert("/api/GoalType/Update", JSON.stringify(updatedGoal))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The goal has been successfully updated.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the update.' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not update the goal.' });
                }
            });
        }
        else if (this.state == "Add" && this.goalForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to add goal: ' + this.goalForm.value.name,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let addGoal = {
                        goalTypeId: 0,
                        goalName: this.goalForm.value.goalTypeId,
                        name: this.goalForm.value.name,
                        measurement: this.goalForm.value.measurement,
                    }
                    this.entityService.insert("/api/GoalType/Add", JSON.stringify(addGoal))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The goal has been successfully added.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the creation process. ' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the goal.' });
                }
            });
        }
    }
}