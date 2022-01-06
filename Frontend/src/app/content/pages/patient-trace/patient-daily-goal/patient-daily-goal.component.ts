import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DailyGoal } from 'src/app/models/data/goal.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-patient-daily-goal',
    templateUrl: './patient-daily-goal.component.html',
    styleUrls: ['./patient-daily-goal.component.css']
})
export class PatientDailyGoalComponent {
    @Input() goal;
    @Input() state;
    @Input() userId;
    goalForm!: FormGroup;

    constructor(private entityService: HttpEntityRepositoryService<DailyGoal>, private messageService: MessageService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder, private authService: AuthService) {
        this.goalForm = this.formBuilder.group({
            'dailyCaloriIntake': new FormControl(''),
            'dailyCarbohydrateIntake': new FormControl(''),
            'dailyProteinIntake': new FormControl(''),
            'dailyOilIntake': new FormControl(''),
            'dailyTargetStep': new FormControl(''),
            'targetWeight': new FormControl(''),
            'dailyCaloriExpenditure': new FormControl(''),
            'targetDate': new FormControl('', [Validators.required]),
        });
    }
    ngOnChanges(changes: SimpleChanges) {
        this.goalForm.reset();
        if (this.goal) {
            this.goalForm = this.formBuilder.group({
                'dailyCaloriIntake': new FormControl(this.goal.dailyCaloriIntake),
                'dailyCarbohydrateIntake': new FormControl(this.goal.dailyCarbohydrateIntake),
                'dailyProteinIntake': new FormControl(this.goal.dailyProteinIntake),
                'dailyOilIntake': new FormControl(this.goal.dailyOilIntake),
                'dailyTargetStep': new FormControl(this.goal.dailyTargetStep),
                'targetWeight': new FormControl(this.goal.targetWeight),
                'dailyCaloriExpenditure': new FormControl(this.goal.dailyCaloriExpenditure),
                'targetDate': new FormControl(this.goal.targetDate, [Validators.required]),
            });
        }
    }

    onSubmit() {
        if (!this.goalForm.valid) {
            return;
        }
        if (this.state == "update" && this.goalForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to update goal: ' + this.goalForm.value.name,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let dailyCaloriIntake = 0;
                    let dailyCarbohydrateIntake = 0;
                    let dailyProteinIntake = 0;
                    let dailyOilIntake = 0;
                    let dailyTargetStep = 0;
                    let targetWeight = 0;
                    let dailyCaloriExpenditure = 0;
                    let targetDate;
                    if (this.goalForm.value.dailyCaloriIntake != this.goal.dailyCaloriIntake) {
                        dailyCaloriIntake = this.goalForm.value.dailyCaloriIntake;
                    }
                    else {
                        dailyCaloriIntake = this.goal.dailyCaloriIntake;
                    }
                    if (this.goalForm.value.dailyCarbohydrateIntake != this.goal.dailyCarbohydrateIntake) {
                        dailyCarbohydrateIntake = this.goalForm.value.dailyCarbohydrateIntake;
                    }
                    else {
                        dailyCarbohydrateIntake = this.goal.dailyCarbohydrateIntake;
                    }
                    if (this.goalForm.value.dailyProteinIntake != this.goal.dailyProteinIntake) {
                        dailyProteinIntake = this.goalForm.value.dailyProteinIntake;
                    }
                    else {
                        dailyProteinIntake = this.goal.dailyProteinIntake;
                    }
                    if (this.goalForm.value.dailyOilIntake != this.goal.dailyOilIntake) {
                        dailyOilIntake = this.goalForm.value.dailyOilIntake;
                    }
                    else {
                        dailyOilIntake = this.goal.dailyOilIntake;
                    }
                    if (this.goalForm.value.dailyTargetStep != this.goal.dailyTargetStep) {
                        dailyTargetStep = this.goalForm.value.dailyTargetStep;
                    }
                    else {
                        dailyTargetStep = this.goal.dailyTargetStep;
                    }
                    if (this.goalForm.value.targetWeight != this.goal.targetWeight) {
                        targetWeight = this.goalForm.value.targetWeight;
                    }
                    else {
                        targetWeight = this.goal.targetWeight;
                    }
                    if (this.goalForm.value.dailyCaloriExpenditure != this.goal.dailyCaloriExpenditure) {
                        dailyCaloriExpenditure = this.goalForm.value.dailyCaloriExpenditure;
                    }
                    else {
                        dailyCaloriExpenditure = this.goal.dailyCaloriExpenditure;
                    }
                    if (this.goalForm.value.targetDate != this.goal.targetDate) {
                        targetDate = this.goalForm.value.targetDate;
                    }
                    else {
                        targetDate = this.goal.targetDate;
                    }
                    let updatedGoal = {
                        userId: this.userId,
                        professionnelUserId: this.authService.CurrentUserId,
                        dailyCaloriIntake: dailyCaloriIntake,
                        dailyCarbohydrateIntake: dailyCarbohydrateIntake,
                        dailyProteinIntake: dailyProteinIntake,
                        dailyOilIntake: dailyOilIntake,
                        dailyTargetStep: dailyTargetStep,
                        targetWeight: targetWeight,
                        dailyCaloriExpenditure: dailyCaloriExpenditure,
                        targetDate: targetDate,
                    }
                    this.entityService.insert("/api/DailyGoal/Update", JSON.stringify(updatedGoal))
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
        else if (this.state == "add" && this.goalForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to add goal?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let addGoal = {
                        userId: this.userId,
                        professionnelUserId: this.authService.CurrentUserId,
                        dailyCaloriIntake: this.goalForm.value.dailyCaloriIntake,
                        dailyCarbohydrateIntake: this.goalForm.value.dailyCarbohydrateIntake,
                        dailyProteinIntake: this.goalForm.value.dailyProteinIntake,
                        dailyOilIntake: this.goalForm.value.dailyOilIntake,
                        dailyTargetStep: this.goalForm.value.dailyTargetStep,
                        targetWeight: this.goalForm.value.targetWeight,
                        dailyCaloriExpenditure: this.goalForm.value.dailyCaloriExpenditure,
                        targetDate: this.goalForm.value.targetDate,
                    }
                    this.entityService.insert("/api/DailyGoal/Add", JSON.stringify(addGoal))
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