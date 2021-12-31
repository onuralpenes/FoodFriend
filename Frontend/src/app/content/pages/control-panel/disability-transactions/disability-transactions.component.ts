import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DisabledDetail } from 'src/app/models/user/physical-info/disabled-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-disability-transactions',
    templateUrl: './disability-transactions.component.html',
    styleUrls: ['../control-panel.component.css']
})
export class DisabilityTransactionsComponent {
    disabilityList: DisabledDetail[] = [];
    disability!: DisabledDetail;
    disabilityForm!: FormGroup;
    disabilityBool: boolean = false;
    loaded = false;
    first = 0;
    rows = 7;
    state: string = "";
    constructor(private entityService: HttpEntityRepositoryService<DisabledDetail>, private messageService: MessageService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder) {
        this.entityService.getAll("/DisabledDetail/GetAll").subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.disabilityList = Data.data;
            this.loaded = true;
        })
        this.disabilityForm = this.formBuilder.group({
            'disabledDescription': new FormControl('', [Validators.required]),
            'disabledRatio': new FormControl('', [Validators.required])
        });
    }
    add() {
        this.disabilityForm.reset();
        this.disabilityForm = this.formBuilder.group({
            'disabledDescription': new FormControl('', [Validators.required]),
            'disabledRatio': new FormControl('', [Validators.required])
        });
        this.state = "Add"
        this.disabilityBool = true;
    }

    update(disability: DisabledDetail) {
        this.disability = disability;
        this.disabilityForm.reset();
        this.disabilityForm = this.formBuilder.group({
            'disabledDescription': new FormControl(disability.disabledDescription, [Validators.required]),
            'disabledRatio': new FormControl(disability.disabledRatio, [Validators.required])
        });
        this.state = "Edit"
        this.disabilityBool = true;
    }

    delete(id: number, name: string) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete disability: ' + name,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.entityService.delete("/DisabledDetail?id=", id).subscribe(
                    (data) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'The disability was deleted successfully.',
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
                this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the disability.' });
            }
        });
    }
    onSubmit() {
        if (this.state == "Edit" && this.disabilityForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to update disability: ' + this.disabilityForm.value.disabilityName,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let disabledDescription;
                    let disabledRatio;
                    if (this.disabilityForm.value.disabledDescription != this.disability.disabledDescription) {
                        disabledDescription = this.disabilityForm.value.disabledDescription;
                    }
                    else {
                        disabledDescription = this.disability.disabledDescription;
                    }
                    if (this.disabilityForm.value.disabledRatio != this.disability.disabledRatio) {
                        disabledRatio = this.disabilityForm.value.disabledRatio;
                    }
                    else {
                        disabledRatio = this.disability.disabledRatio;
                    }
                    let updatedDisability = {
                        disabledDetailId: this.disability.disabledDetailId,
                        physicalInfoId: 0,
                        disabledDescription: disabledDescription,
                        disabledRatio: disabledRatio
                    }
                    this.entityService.insert("/DisabledDetail/Update", JSON.stringify(updatedDisability))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The disability has been successfully updated.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the update.' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not update the disability.' });
                }
            });
        }
        else if (this.state == "Add" && this.disabilityForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to add disability: ' + this.disabilityForm.value.disabledDescription,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let addDisability = {
                        disabledDetailId: 0,
                        physicalInfoId: 0,
                        disabledDescription: this.disabilityForm.value.disabledDescription,
                        disabledRatio:  this.disabilityForm.value.disabledRatio,
                    }
                    console.log(addDisability)
                    this.entityService.insert("/DisabledDetail/Add", JSON.stringify(addDisability))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The disability has been successfully added.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the creation process. ' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the disability.' });
                }
            });
        }
    }
}
