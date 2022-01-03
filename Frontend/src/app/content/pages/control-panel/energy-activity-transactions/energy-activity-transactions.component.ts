// This page is currently unavailable due to business rules.

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PersonalEnergyActivity } from 'src/app/models/data/energy-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-energy-activity-transactions',
    templateUrl: './energy-activity-transactions.component.html',
    styleUrls: ['../control-panel.component.css']
})
export class EnergyActivityTransactionsComponent {
    energyActivityList: PersonalEnergyActivity[] = [];
    energyActivity!: PersonalEnergyActivity;
    energyActivityForm!: FormGroup;
    energyActivityBool: boolean = false;
    loaded = false;
    first = 0;
    rows = 7;
    state: string = "";
    constructor(private entityService: HttpEntityRepositoryService<PersonalEnergyActivity>, private authService: AuthService, private messageService: MessageService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder) {
        this.entityService.getAll("/PersonalEnergyActivity/GetAll").subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.energyActivityList = Data.data;
            this.loaded = true;
        })
        this.energyActivityForm = this.formBuilder.group({
            'activityType': new FormControl('', [Validators.required]),
            'activityPeriod': new FormControl('', [Validators.required]),
            'activityEffortSpent': new FormControl('', [Validators.required]),
            'activityEffortUnit': new FormControl('', [Validators.required]),
            'activityStartDate': new FormControl('', [Validators.required]),
            'activityEndDate': new FormControl('', [Validators.required])
        });
    }
    add() {
        this.energyActivityForm.reset();
        this.energyActivityForm = this.formBuilder.group({
            'activityType': new FormControl('', [Validators.required]),
            'activityPeriod': new FormControl('', [Validators.required]),
            'activityEffortSpent': new FormControl('', [Validators.required]),
            'activityEffortUnit': new FormControl('', [Validators.required]),
            'activityStartDate': new FormControl('', [Validators.required]),
            'activityEndDate': new FormControl('', [Validators.required])
        });
        this.state = "Add"
        this.energyActivityBool = true;
    }

    update(energyActivity: PersonalEnergyActivity) {
        this.energyActivity = energyActivity;
        this.energyActivityForm.reset();
        this.energyActivityForm = this.formBuilder.group({
            'activityType': new FormControl(energyActivity.activityType, [Validators.required]),
            'activityPeriod': new FormControl(energyActivity.activityPeriod, [Validators.required]),
            'activityEffortSpent': new FormControl(energyActivity.activityEffortSpent, [Validators.required]),
            'activityEffortUnit': new FormControl(energyActivity.activityEffortUnit, [Validators.required]),
            'activityStartDate': new FormControl(energyActivity.activityStartDate, [Validators.required]),
            'activityEndDate': new FormControl(energyActivity.activityEndDate, [Validators.required])
        });
        this.state = "Edit"
        this.energyActivityBool = true;
    }

    delete(id: number, name: string) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete energy activity: ' + name,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.entityService.delete("/DisabledDetail?id=", id).subscribe(
                    (data) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'The energy activity was deleted successfully.',
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
                this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the energy activity.' });
            }
        });
    }
    onSubmit() {
        if (this.state == "Edit" && this.energyActivityForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to update energy activity: ' + this.energyActivityForm.value.energyActivityName,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let activityType;
                    let activityPeriod;
                    let activityEffortSpent;
                    let activityEffortUnit;
                    let activityStartDate;
                    let activityEndDate;
                    if (this.energyActivityForm.value.activityType != this.energyActivity.activityType) {
                        activityType = this.energyActivityForm.value.activityType;
                    }
                    else {
                        activityType = this.energyActivity.activityType;
                    }
                    if (this.energyActivityForm.value.activityPeriod != this.energyActivity.activityPeriod) {
                        activityPeriod = this.energyActivityForm.value.activityPeriod;
                    }
                    else {
                        activityPeriod = this.energyActivity.activityPeriod;
                    }
                    if (this.energyActivityForm.value.activityEffortSpent != this.energyActivity.activityEffortSpent) {
                        activityEffortSpent = this.energyActivityForm.value.activityEffortSpent;
                    }
                    else {
                        activityEffortSpent = this.energyActivity.activityEffortSpent;
                    }
                    if (this.energyActivityForm.value.activityEffortUnit != this.energyActivity.activityEffortUnit) {
                        activityEffortUnit = this.energyActivityForm.value.activityEffortUnit;
                    }
                    else {
                        activityEffortUnit = this.energyActivity.activityEffortUnit;
                    }
                    if (this.energyActivityForm.value.activityStartDate != this.energyActivity.activityStartDate) {
                        activityStartDate = this.energyActivityForm.value.activityStartDate;
                    }
                    else {
                        activityStartDate = this.energyActivity.activityStartDate;
                    }
                    if (this.energyActivityForm.value.disabledRatio != this.energyActivity.activityEndDate) {
                        activityEndDate = this.energyActivityForm.value.disabledRatio;
                    }
                    else {
                        activityEndDate = this.energyActivity.activityEndDate;
                    }
                    let updatedEnergyActivity = {
                        personalEnergyActivityId: this.energyActivity.personalEnergyActivityId,
                        userId: this.authService.CurrentUserId,
                        activityType: activityType,
                        activityPeriod: activityPeriod,
                        activityEffortSpent: activityEffortSpent,
                        activityEffortUnit: activityEffortUnit,
                        activityStartDate: activityStartDate,
                        activityEndDate: activityEndDate
                    }
                    this.entityService.insert("​/PersonalEnergyActivity​/Update", JSON.stringify(updatedEnergyActivity))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The energy activity has been successfully updated.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the update.' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not update the energy activity.' });
                }
            });
        }
        else if (this.state == "Add" && this.energyActivityForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to add energy activity: ' + this.energyActivityForm.value.activityType,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let addEnergyActivity = {
                        personalEnergyActivityId: this.energyActivity.personalEnergyActivityId,
                        userId: this.authService.CurrentUserId,
                        activityType: this.energyActivityForm.value.activityType,
                        activityPeriod: this.energyActivityForm.value.activityPeriod,
                        activityEffortSpent: this.energyActivityForm.value.activityEffortSpent,
                        activityEffortUnit: this.energyActivityForm.value.activityEffortUnit,
                        activityStartDate: this.energyActivityForm.value.activityStartDate,
                        activityEndDate: this.energyActivityForm.value.activityEndDate
                    }
                    this.entityService.insert("/PersonalEnergyActivity/Add", JSON.stringify(addEnergyActivity))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The energy activity has been successfully added.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the creation process. ' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the energy activity.' });
                }
            });
        }
    }
}
